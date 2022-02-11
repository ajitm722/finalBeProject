const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//taking the compiled solc file from build
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({ data:compiledFactory.bytecode })
                .send({ from: accounts[0], gas:'1000000' });

    await factory.methods.createCampaign('100', "aaj tak").send({
        from: accounts[0],
        gas: '1000000'
    });

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];

    //getting the campaign as it is already deployed will put campaign Address
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaign', ()=>{
    it('deployes a factory and a campaign', ()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    
    // test for checking manager the person who created the campaign
    it('manager test', async ()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    //test contributing to the campaign and if the contributers are added to the approvers list
    it('testing contribution and approvers', async ()=>{
        //contributing to the campaign from accounts[1] sending 200 wei
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: 200
        });

        //we have mapping for approvers so as to get advantage of contant lookup
        assert(await campaign.methods.approvers(accounts[1]).call());

    });

    //minimum contribution test
    it('minimum contribution', async()=>{
        try{
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: 90
            });
            assert(false)
        }catch(err){
            assert(err);
        }
    });

    //create a payment request by manager
    it('allows a manager to make a payment request', async()=>{
        const description = "hey i want tea you fucking guys need to pay for it";
        const value = "100";
        const recipient = accounts[1];
        const newsTitle = "Lata mangeshkar dead";
        await campaign.methods.createRequest(newsTitle, description, value, recipient).send({
            from: accounts[0],
            gas: '1000000'
        });

        const requestAdded = await campaign.methods.requests(0).call(); 

        assert.equal(accounts[1], requestAdded.recipient);

    });

    //end to end test contribute to campaign create a request approve the request send money to the recipient
    it('end to end', async()=>{
        //contribute money
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        //create request
        await campaign.methods.createRequest('custom title','custom description', web3.utils.toWei('5','ether'), accounts[1]).send({
            from: accounts[0],
            gas: '1000000'
        });

        //vote for the request by approvers
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });

        //finalize the request , will be able to finalize the request as the 50% of people have approved the request
        // await campaign.methods.finalizeRequest(0).send({
        //     from: accounts[0],
        //     gas: '1000000'
        // });

        //check whether the money is transfered to account 1
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance>104);

    });

    //end to end test contribute to campaign create a request approve the request send money to the recipient
    it('end to end news approve', async()=>{
        //contribute money to campaign and becoming a member
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[2],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[3],
            value: web3.utils.toWei('1', 'ether')
        });

        //create request a.k.a creating a news by campaign manager
        await campaign.methods.createRequest('title 1','news 1', web3.utils.toWei('1','ether'), accounts[0]).send({
            from: accounts[0],
            gas: '1000000'
        });

        // //vote for the request by approvers 2 people approve
        await campaign.methods.approveRequest(0).send({
            from: accounts[1],
            gas:'1000000'
        });
        await campaign.methods.approveRequest(0).send({
            from: accounts[2],
            gas:'1000000'
        });

        var complete = await campaign.methods.requests(0).call();
        // console.log(complete);
        
        
    });

    //end to end test contribute to campaign create a request approve the request send money to the recipient
    it('end to end news disapprove', async()=>{
        //contribute money to campaign and becoming a member
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[2],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[3],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[4],
            value: web3.utils.toWei('1', 'ether')
        });
        await campaign.methods.contribute().send({
            from: accounts[5],
            value: web3.utils.toWei('1', 'ether')
        });

        //create request a.k.a creating a news by campaign manager
        await campaign.methods.createRequest('title 1','news 1', web3.utils.toWei('1','ether'), accounts[0]).send({
            from: accounts[0],
            gas: '1000000'
        });

        // //vote for the request by approvers 2 people approve
        await campaign.methods.disapproveRequest(0).send({
            from: accounts[1],
            gas:'1000000'
        });
        await campaign.methods.disapproveRequest(0).send({
            from: accounts[2],
            gas:'1000000'
        });
        await campaign.methods.approveRequest(0).send({
            from: accounts[3],
            gas:'1000000'
        });
        await campaign.methods.disapproveRequest(0).send({
            from: accounts[4],
            gas:'1000000'
        });

        var complete = await campaign.methods.requests(0).call();
        console.log(complete);
        
        
    });
     
    //end to end test contribute to campaign create a request approve the request send money to the recipient
    // it('end to end 2 news one true and one false', async(done)=>{
    //     //contribute money to campaign and becoming a member
    //     await campaign.methods.contribute().send({
    //         from: accounts[1],
    //         value: web3.utils.toWei('1', 'ether')
    //     });
    //     await campaign.methods.contribute().send({
    //         from: accounts[2],
    //         value: web3.utils.toWei('1', 'ether')
    //     });
    //     await campaign.methods.contribute().send({
    //         from: accounts[3],
    //         value: web3.utils.toWei('1', 'ether')
    //     });
    //     await campaign.methods.contribute().send({
    //         from: accounts[4],
    //         value: web3.utils.toWei('1', 'ether')
    //     });
    //     await campaign.methods.contribute().send({
    //         from: accounts[5],
    //         value: web3.utils.toWei('1', 'ether')
    //     });

    //     //create request a.k.a creating a news by campaign manager
    //     await campaign.methods.createRequest('news 1', web3.utils.toWei('1','ether'), accounts[0]).send({
    //         from: accounts[0],
    //         gas: '1000000'
    //     });
    //     await campaign.methods.createRequest('news 2', web3.utils.toWei('1','ether'), accounts[0]).send({
    //         from: accounts[0],
    //         gas: '1000000'
    //     });

    //     var news1 = await campaign.methods.requests(0).call();
    //     var news2 = await campaign.methods.requests(1).call();
    //     console.log(news1);
    //     console.log(news2);

    //     try{
    //         var succ, err = await campaign.methods.disapproveRequest(1).send({
    //             from: accounts[2],
    //             gas:'1000000'
    //         });
    //         console.log(succ);
    //         console.log(err);
    //     }catch(done){
    //         assert(done)
    //     }
    //     // FOR NEWS 1
    //     //vote for the request by approvers 2 people approve
    //     // await campaign.methods.approveRequest(0).send({
    //     //     from: accounts[1],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.disapproveRequest(0).send({
    //     //     from: accounts[2],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.approveRequest(0).send({
    //     //     from: accounts[3],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.disapproveRequest(0).send({
    //     //     from: accounts[4],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.approveRequest(0).send({
    //     //     from: accounts[5],
    //     //     gas:'1000000'
    //     // });

    //     // var complete = await campaign.methods.requests(0).call();
    //     // console.log(complete);
        
    //     // await campaign.methods.disapproveRequest(0).send({
    //     //     from: accounts[1],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.disapproveRequest(0).send({
    //     //     from: accounts[2],
    //     //     gas:'1000000'
    //     // });
    //     // await campaign.methods.disapproveRequest(0).send({
    //     //     from: accounts[3],
    //     //     gas:'1000000'
    //     // });
    //     // var complete = await campaign.methods.requests(1).call();
    //     // console.log(complete);
    // });


});
