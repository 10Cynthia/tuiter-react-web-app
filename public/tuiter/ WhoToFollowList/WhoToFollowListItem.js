function WhoToFollowListItem(who) {
    return (`
        <li class="list-group-item">
            <div class="row wd-container-2">
                 <div class="col-8">
                      <div>
                        <img class="float-start wd-img me-2" src=${who.avatarIcon}/>
                      </div>

                      <div class="fw-bolder">
                        ${who.userName} <i class="fa-solid fa-circle-check fa-2xs"></i>
                      </div>
                      <div class="text-secondary">
                        @${who.handle}
                      </div>

                 </div>

                 <div class="col-4">
                      <button class="btn btn-primary w-30 rounded-pill float-end">
                        Follow
                      </button>
                 </div>

            </div>

        </li>
        `)
}

export default WhoToFollowListItem;