// Directions:
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

var facebookProfile = {
  
  name: "Brandon",
  friends: 350,
  messages: [
    "Message One",
    "Message 2",
    "Message 3"],
  addFriend: function add(){
    facebookProfile.friends = facebookProfile.friends + 1
  },
  removeFriend: function remove(){
    facebookProfile.friends = facebookProfile.friends - 1
  },
  postMessage: function postMessage(message) {
   facebookProfile.messages.push(message);
  },
  deleteMessage: function deleteMessage(index) {
    facebookProfile.messages.splice(index,1)
  }
  
};


