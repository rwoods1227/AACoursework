import {FollowToggle} from "./follow_toggle";


$(() => { 
  $("button.follow-toggle").each(function(_idx, el){ //el is html element(button)
    new FollowToggle(el);
  })
  $("nav.users-search").each(function (_idx, el) { //el is html element(button)
    new UsersSearch(el);
  })
}); 