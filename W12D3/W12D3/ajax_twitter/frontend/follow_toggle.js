import {APIUtil} from "./util/api_util"


export function FollowToggle(el) { // this is html
  this.$el = $(el); // this is jquery
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  // debugger
  this.render();
  this.$el.on("click",this.handleClick.bind(this)); // e is always passed to callback automatically
}

FollowToggle.prototype.render = function(){
  if (this.followState === "following" || this.followState === "unfollowing"){
    this.$el.prop("disabled", true)
  }
  else{
    this.$el.prop("disabled", false)
  }
    if (this.followState === "unfollowed"){
      this.$el.text("Follow!")
    }
    else if (this.followState === "followed") {
      this.$el.text("Unfollow!")
    }
}

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();
  if(this.followState === "unfollowed") {
    // debugger 
    APIUtil.followUser(this.userId).then(() => {
      this.followState = "followed";
      this.render();
    });
    this.followState = "following";
    this.render();
  }
  else if (this.followState === "followed") {
    //debugger
    APIUtil.unfollowUser(this.userId).then(() => {
      this.followState = "unfollowed";
      this.render();
    });
    this.followState = "unfollowing";
    this.render();
  }
  // this.render();
}

