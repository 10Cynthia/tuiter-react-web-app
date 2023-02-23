import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
$('wd-explore').append('
//<div class="row">
//<!-- search field and cog -->
//</div>
//
//<ul class="nav mb-2 nav-tabs">
//<!-- tabs -->
//</ul>
//
//<!-- image with overlaid text -->
////${PostSummaryList()} `); }

<div class="col-6 wd-equal-margins">
    <div class="row wd-container-2">
            <div class="col-10">
              <div>
                <input class="ps-5 form-control rounded-pill wd-position" placeholder="Search Tuiter"/>
                <span class="position-absolute wd-search-tuiter"><i class="fa-solid fa-magnifying-glass ms-3 wd-input-icon fa-sm"></i></span>
              </div>
            </div>
            <div class="col-2 wd-fg-color-blue">
              <i class="fa-solid fa-gear fa-xl"></i>
            </div>
          </div>
</div>

`)};

export default ExploreComponent;