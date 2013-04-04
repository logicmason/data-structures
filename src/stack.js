// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
	var items = {};
	var size = 0;

	var add = function(item){
		items[size] = item;
		size += 1;
		return item;
	};

	var remove = function() {
		var item;
		if (size === 0) return undefined;
		size -= 1;
		item = items[size];
		delete(items[size]);
		return item;
	};

	var length = function() {
		return size;
	};

  var stack = {
    add: add,
    remove: remove,
    length: length 
  };

  return stack;
}
