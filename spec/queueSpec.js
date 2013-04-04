describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  describe("Length", function() {
  	it("should be zero for a new queue", function() {
  		expect(queue.length).toEqual(0);
  	});
  });

  describe("Add", function() {
	  it("should have a method named 'add'", function() {
	    expect(queue.add).toEqual(jasmine.any(Function));
	  });
	  
	  it("Length should be one after adding one item", function() {
	  	queue.add("blah");
	  	expect(queue.length).toEqual(1);
	  });

	  it("Length should be three hundred after adding three hundred items", function(){
	  	for(i = 0; i<300; i++){ 
	  		queue.add("ha");
	  	}
	  	expect(queue.length).toEqual(300);
	  })

	}); 

	describe("Remove", function() {
		it("should have a method named 'remove'", function () {
			expect(queue.remove).toEqual(jasmine.any(Function));
		});

		it("should return undefined if called on an empty queue", function() {
			expect(queue.remove()).toBeUndefined();
		});

		it("should reduce the length of a 1 item queue to 0 items when called", function() {
			queue.add("first");
			queue.remove();
			expect(queue.length).toEqual(0);
		});

		it("should reduce the length of a 3 item queue to 2 items when called", function() {
			queue.add("first");
			queue.add("second");
			queue.add("third");
			queue.remove();
			expect(queue.length).toEqual(2);
		});

		it("should reduce the length of a 3 item queue to 1 item when called twice", function() {
			queue.add("first");
			queue.add("second");
			queue.add("third");
			queue.remove();
			queue.remove();
			expect(queue.length).toEqual(1);
		});

	});




  // add more tests here to test the functionality of queue
});