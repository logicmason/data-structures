// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var items = {};
  
  var add = function (item) {
    node = new Node(item);
    if (queue.length === 0) {
      queue.head = node;
    } else {
      queue.tail.back = node;
    }
    queue.tail = node;
    node.front = queue.tail;
    queue.length += 1;
    return item;
  };
  
  var remove = function () {
    if(queue.length === 0) return undefined;
    var newFront = queue.head.back;
    var oldFront = queue.head;
    delete(queue.head);
    queue.head = newFront;
    queue.length -= 1;
    return oldFront;
  };

  var queue = {
    add: add,
    remove: remove,
    length: 0,
    tail: null,
    head: null
  };
  
  var Node = function (data) {
    return {
      front: null,
      back: null,
      data: data
    };
  };

  return queue;
}