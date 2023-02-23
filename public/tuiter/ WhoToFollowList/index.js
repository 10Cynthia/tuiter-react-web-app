import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

function WhoToFollowList () {
//    $('#wd-who').append
     return (`
    <ul class="list-group">
        <li class="list-group-item fw-bolder">
                  Who to follow
        </li>
        ${who.map(who => WhoToFollowListItem(who)).join('')}
    </ul>

    `);
}

$(WhoToFollowList);