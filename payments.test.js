describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = Number(100);
      tipAmtInput.value = Number(20);
    });

    it('should add new bill amount, tip amount, and tip percentage to allPayments on submitPaymentInfo()', function () {
        createCurPayment();
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    });

    it('should add table row element with new bill amount, tip amount, and tip percentage to paymentTbody on appendPaymentTable()', function(){
        createCurPayment();
        submitPaymentInfo();
        let curPayment = allPayments['payment' + paymentId];
        appendPaymentTable(curPayment);

        let curPayTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curPayTdList[0].innerText).toEqual('$' + '100');
        expect(curPayTdList[1].innerText).toEqual('$' + '20');
        expect(curPayTdList[2].innerText).toEqual(20 + '%');
    });

    it('should add table row element with sum of all bill payments, sum of all tip payments, and average tip percentage to summaryTable on updateSummary()', function(){
        createCurPayment();
        submitPaymentInfo();

        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        expect(summaryTds[0].innerHTML).toEqual('$' + '100');
        // expect(summaryTdList[1].innerText).toEqual('$20');
        // expect(summaryTdList[2].innerText).toEqual(20 + '%');
    });
    
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      summaryTable.innerHTML = '';
      tipPercentAvg = 0;
    });
  });
  