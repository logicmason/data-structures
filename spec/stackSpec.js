describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  describe("Length", function() {
		  it("should have a property named 'length'", function() {
		  	expect(stack.length()).toEqual(jasmine.any(Number));
		  });

		  it("should be zero upon creating a new stack", function() {
		  	expect(stack.length()).toEqual(0);
		  });
	});

  describe("Add", function() {
	  it("should have a method named 'add'", function() {
	    expect(stack.add).toEqual(jasmine.any(Function));
	  });
	  
	  it("should return a size of one after the add() method is called once", function() {
	    stack.add("foo");
	    expect(stack.length()).toEqual(1);
	  });

	  it("should be three upon calling .add() three times on the stack", function () {
	  	stack.add("foo");
	  	stack.add("foo");
	  	stack.add("foo");
	  	expect(stack.length()).toEqual(3);
	  });
	});

	describe("Remove", function() {
		it("should be undefined when called on a new stack", function () {
			stack.remove();
			expect(stack.remove()).toBeUndefined();
		});

		it("should be undefined when called on an an empty stack", function () {
			stack.add("bar");
			stack.remove();
			expect(stack.remove()).toBeUndefined();
		});

		it("should reduce the length of a 3 item stack to 2 when called", function () {
			stack.add("foo");
			stack.add("bar");
			stack.add("another");
			stack.remove();
			expect(stack.length()).toEqual(2);
		});

		it("should return the last item added to the stack", function() {
			var a = "walrus";
			stack.add(a);
			var b = stack.remove();
			expect(a).toEqual(b);
		})
	});

  // add more tests here to test the functionality of stack
});