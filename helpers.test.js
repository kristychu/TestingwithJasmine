describe("Helpers test (with setup and tear-down)", function() {
    // beforeEach(function () {
    //   // initialization logic

    // });
  
    it('should sum all tipAmt, billAmt, and tipPercent from allPayments on sumPaymentTotal()', function () {
        billAmtInput.value = Number(100);
        tipAmtInput.value = Number(20);
        createCurPayment();
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });
  
    it('should convert the bill and tip amt into a tip percent on calculateTipPercent()', function(){
        expect(calculateTipPercent(Number(100), Number(20))).toEqual(20);
        expect(calculateTipPercent(Number(100), Number(0))).toEqual(0);
    });

    it('should append a newly created td element from the value to a table row element', function(){
        billAmtInput.value = Number(100);
        tipAmtInput.value = Number(20);
        createCurPayment();
        submitPaymentInfo();

        let paymentTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(paymentTdList.length).toEqual(4);
    });

    it('should append a newly created delete button td element to a table row element', function(){
        billAmtInput.value = Number(100);
        tipAmtInput.value = Number(20);
        createCurPayment();
        submitPaymentInfo();

        let paymentTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(paymentTdList.length).toEqual(4);
        expect(paymentTdList[3].innerText).toEqual('X');
    });
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      summaryTable.innerHTML = '';
    });
  });
  