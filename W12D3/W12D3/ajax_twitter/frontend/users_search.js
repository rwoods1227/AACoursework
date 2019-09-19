class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find("input#search"); // does find use array?
    this.ul = this.$el.find("ul.users");
   
  } 


  handleInput(e){
    e.preventDefault();
    APIUtil.searchUsers(e.val()).then( () => { // for later 

    })
  }

  renderResults(){
    this.ul.
  }


}