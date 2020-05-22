<?php

namespace Modules\CBSite\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class CBSiteController extends ControllerCB
{

    public function __construct()
    {
        
    }
    private $langActive = [
        'vi',
        'en',
    ];
    public function all(Request $request){
        $this->updateSeo(setting('site_title','Title'),setting('fe_site_description','description'),setting('site_cover_image','Title'));
        $menu = get_menu('suga-menu');
        $socialMenu = get_menu('socials-menu');
        $ourContactData = get_single_post(null, 'contact');
        $ourContactData->attributes = $this->generateArrayKeyFromArray($ourContactData->attributes);

        view()->share('menu',$menu);
        view()->share('socialMenu',$socialMenu);
        view()->share('ourContactData', $ourContactData);
        $res = get_data_by_url($request);
        if ($res->is404){
            abort(404);
        }
        if ($res->pageType == 'vi'){
            if (in_array($res->pageType, $this->langActive)) {
                $request->session()->put(['lang' => $res->pageType]);
                return redirect()->back();
            }
        }
        if ($res->pageType == 'en'){
            if (in_array($res->pageType, $this->langActive)) {
                $request->session()->put(['lang' => $res->pageType]);
                return redirect()->back();
            }
        }
        if ($res->pageType == 'home'){

            $bannerData = get_single_post(null, 'banner');
            $bannerData = $this->addAttributesAndItems($bannerData);

            $aboutData = get_single_post(null, 'about-us');
            $aboutData = $this->addAttributesAndItems($aboutData);

            $whatWeDoData = get_single_post(null, 'what-we-do');
            $whatWeDoData = $this->addAttributesAndItems($whatWeDoData, 'detail-');

            $ourDominanceData = get_single_post(null, 'our-dominance');
            $ourDominanceData = $this->addAttributesAndItems($ourDominanceData, 'item-');
            $ourDominanceData->itemsDetail = $this->compileAttribute( 'detail-',$ourDominanceData->attributes);

            $ourTeamData = get_single_post(null, 'our-team');
            $ourTeamTag = get_tag_by_slug('our-team');
            $memberList = get_posts(10,'desc','created_at', [],[$ourTeamTag->id]);
            foreach ($memberList as &$item){
                $item->attributes = $this->generateArrayKeyFromArray($item->attributes);
            }

            $ourServiceData = get_single_post(null, 'our-services');
            $ourServiceData = $this->addAttributesAndItems($ourServiceData, 'service-');

            $ourPortfolioData = get_single_post(null, 'our-portfolio');

            $ourPortfolioTag = get_tag_by_slug('portfolio');
            $featureTag = get_tag_by_slug('feature');
            $ourPortfolioItem = get_posts(10,'desc','created_at', [],[$ourPortfolioTag->id],$featureTag->id);
            foreach ($ourPortfolioItem as $item){
                $item = $this->addAttributesAndItems($item, 'item-');
            }

            $ourPartnerData = get_single_post(null, 'our-partners');
            $partnerTag = get_tag_by_slug('our-partner');
            $partnerList = get_posts(10,'desc','created_at', [],[$partnerTag->id]);
            foreach ($partnerList as &$item){
                $item->attributes = $this->generateArrayKeyFromArray($item->attributes);
            }

            $blogData = get_single_post(null, 'blog');
            $blogTag = get_tag_by_slug('post');
            $blogList = get_posts(3,'desc','publish_date', [],[$blogTag->id]);
            foreach ($blogList as $item){
                $item = $this->addAttributesAndItems($item, 'item-');
            }
            return view('cbsite::'.$res->pageType, compact('bannerData','aboutData', 'whatWeDoData', 'ourDominanceData', 'ourTeamData','memberList', 'ourServiceData', 'ourPortfolioData' , 'blogData', 'ourPartnerData', 'partnerList', 'blogList', 'ourPortfolioItem'));
        }
        $this->updateSeo($res->title, isset($res->description)?$res->description:'', isset($res->image)?$res->image:'');
        if (isset($res->data['itemBlog'])){
            $this->addAttributesAndItems($res->data['itemBlog']);
        }
        if (!empty($res->data['recentPost']) && count($res->data['recentPost'])>0){
            foreach ($res->data['recentPost'] as $item){
                $this->addAttributesAndItems($item, 'item-');
            }
        }

        return view('cbsite::'.$res->pageType,$res->data);
        }
        public function generateArrayKeyFromArray($array = [], $field = 'name'){
            $attributesTmp = [];
            foreach ($array as $attribute){
                $attributesTmp[$attribute->$field] = $attribute->content;
            }
            return $attributesTmp;
        }

    public function compileAttribute($attNames = '', $attributes = []){
        $items = [];
        foreach ($attributes as $key => $attribute){
            if (strpos($key, $attNames) !== false){
                $arrTmp = explode('|', $attribute);
                foreach ($arrTmp as &$value){
                    $value = trim($value);
                }
                array_push($items, $arrTmp);
            }
        }
        return $items;
    }

    public function addAttributesAndItems($post, $attrPrefix = 'item-'){
        $post->attributes = $this->generateArrayKeyFromArray($post->attributes);
        $post->items = $this->compileAttribute( $attrPrefix,$post->attributes);
        return $post;
    }
}
