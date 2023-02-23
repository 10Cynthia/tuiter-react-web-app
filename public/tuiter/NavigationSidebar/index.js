function NavigationSidebar () {
//    $('#wd-nav').append
     return (`
       <div class="list-group">
           <a class="list-group-item list-group-item-action"><i class="fa-brands fa-twitter"></i></a>
           <a class="list-group-item list-group-item-action " href="#"><i class="fa-solid fa-house"></i><span class="wd-text-respon">  Home</span></a>
           <a class="list-group-item list-group-item-action active" href="#"><i class="fa-solid fa-hashtag"></i><span class="wd-text-respon">  Explore</span></a>
           <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-bell"></i><span class="wd-text-respon">  Notifications</span></a>
           <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-envelope"></i><span class="wd-text-respon">  Messages</span></a>
                       <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-bookmark"></i><span class="wd-text-respon">  Bookmarks</span></a>
                       <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-list-ul"></i><span class="wd-text-respon">  Lists</span></a>
                       <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-user"></i><span class="wd-text-respon">  Profile</span></a>
                       <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-ellipsis"></i><span class="wd-text-respon">  More</span></a>

       </div>
       <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div>

     `);

}
$(NavigationSidebar);