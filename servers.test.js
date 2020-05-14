describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add table row element with a new server and tipAverage to serverTbody on updateServerTable()', function(){
    // updateServerTable();
    //first 2 lines below are from Stephane D., Springboard TA
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTdList[0].innerText).toEqual('Alice');
    // expect(curTdList[1].innerText).toEqual('$0.00');
  })



  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
  });
});
