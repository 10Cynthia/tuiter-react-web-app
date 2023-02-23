import post from './post.js';
import PostSummaryItem from './PostSummaryItem.js'

function PostSummaryList() {
//$('wd-post').append
return
(`
<ul class="list-group">
    ${post.map(post => PostSummaryItem(post)).join('')}
</ul>
`);
}

$(PostSummaryList);