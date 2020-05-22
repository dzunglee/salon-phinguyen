<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakePortfolioItemTableSeeder extends Seeder
{
    public $lang = ['en'=>'en', 'vi'=>'vi'];

    public function multiLanguage($en = null, $vi = null){
        $data = json_encode([$this->lang['en']=>$en,$this->lang['vi']=>$vi]);
        $data = str_replace("\\/", "/", $data);
        return $data;
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //6
        Post::where('slug','cInsight')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'cInsight',
                null
            ),
            'title_seo' => 'cInsight',
            'description' => $this->multiLanguage(
                'Nowadays, the increasing pressure of life makes people easier to get depression. Current treatments for depression are not highly effective and patients are at risk of recurrence.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p class="MsoNormal" style="text-align: center; "><img src="http://combros.vn/storage/default/Our portfolio/cInsight.jpg" style="width: 866px; float: none;"><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span></b></p><p class="MsoNormal"><br></p><p class="MsoNormal"><font face="Roboto"><b>ISSUE</b></font><br></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Nowadays, the increasing
pressure of life makes people easier to get depression. Current treatments for
depression are not highly effective and patients are at risk of recurrence. </span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">With ambition to provide
better treatment options for patients by working with health care professional neurosurgeon
and investing in research and development, Combros creates cInsight. </span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">IDEA
DEVELOPMENT</span></b><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></b></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">With the contribution of
professional neurosurgeon as a mentor, Combros has a desire to apply brainwave
technology to medicine, which have infinite potential for not only medical but
also multi-sector and multi-field.</span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">cInsight is an IoT
device that measures human brain waves to monitor anxiety disorder, sleep
disorder for people who are suffering from stress and insomnia. </span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Besides, this is the
first product integrated AI technology and Big Data to offer the most suitable
non-drug methods for users.</span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal"><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">IDEA EXECUTION</span></b><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></b></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">cInsight targets 4 target
users: student, officer, the elderly and pregnant and postpartum woman who are
under stress or insomnia from work and life.</span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Users wear device to
collect brain waves data, which will be decoded by AI technology and Big Data
to diagnose neurological problems in order to provide timely and appropriate
solutions through application on smart phone.</span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p>&nbsp;</o:p></span></p>

<p class="MsoNormal" style="text-align: center; "><img src="http://combros.vn/storage/default/Our portfolio/cInsight.howitworks.jpg" style="width: 1429px;"><br></p>

<p class="MsoNormal"><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p>&nbsp;</o:p></span></b></p>

<p class="MsoNormal"><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">OUTCOME</span></b><b><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></b></p>

<p class="MsoNormal"><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">The prototype version is
ready for customers to experience directly.</span><span style="font-family: Roboto; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p>

<p class="MsoNormal"><span style="font-family: Roboto; background: rgb(249, 249, 249);">The commercial version is being completed and
will be released in early 2020.</span><span style="font-family:Roboto;
background:#F9F9F9"><o:p></o:p></span></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/cInsight.avtar.jpg',null),
            'slug' => str_slug('cInsight'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Video',
                'name' => 'video',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://www.youtube.com/watch?v=YKcdo7abgQc',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

        Post::where('slug','rescue-device')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'Rescue Device',
                null
            ),
            'title_seo' => 'Rescue Device',
            'description' => $this->multiLanguage(
                'Rescue device will be attached to life vest. When falling into the sea, water sensor will detect and allow the device continuously updating the location to server system on website management dashboard or mobile application.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p class="MsoNormal"><img src="/storage/default/Our portfolio/rescue.png" style="width: 680.656px;"><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b><br></b></span></span></p><p class="MsoNormal"><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b>Issue<br></b></span></span><span style="font-family: Roboto; font-size: 12pt;">The problem of locating
objects/people on the sea is one of the urgent issues that has been
focused on from civil to national
defense, especially in the field
of marine rescue.</span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Idea
development</span></span></b></p><p class="MsoNormal"><span style="font-family: Roboto; font-size: 12pt;">Combos wants to create a
compact device that can be used on applications easily by integrating device into life vest.<br></span><span style="font-family: Roboto; font-size: 12pt;">On top of that how can the device be stored for a long time before being used and still ensure the energy of the device
(battery is used for 1 year) and high
accuracy is one of the issues that are being paid attention by Combros.</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/rescue.jpg" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Idea
execution<br></span></b><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">Rescue device will be attached
to life vest. When falling into
the sea, water sensor will
detect and allow the device
continuously updating the location to server system on website
management dashboard or mobile application.</span><span style="font-family: Roboto; font-size: 12pt;">&nbsp;</span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Outcome<br></span></b><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Version 1 </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">is targeted at
specific customer segment: boat owners<br></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Version 2 </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">is ready for mass production.</span></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/rescue.png',null),
            'slug' => str_slug('rescue-device'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Video',
                'name' => 'video',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://www.youtube.com/watch?v=gWQCz3bncmA',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

        //2
        Post::where('slug','cBMotion')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'cBMotion',
                null
            ),
            'title_seo' => 'cBMotion',
            'description' => $this->multiLanguage(
                'With the current lifestyle and intensity of work, people have no time to care about their health that requires handy equipment for them to easily monitor their health status, especially put tracking device into ordinary shoes.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p class="MsoNormal"><img src="/storage/default/Our portfolio/cbmotion2.jpg" style="width: 680.656px;"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><br></span></span></b></p><p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Issue<br></span></span></b><span style="font-family: Roboto; font-size: 12pt;">With the current lifestyle and intensity of work, people have no time to care about their health
that requires handy equipment for
them to easily monitor their health
status, especially put tracking
device into ordinary shoes.</span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Idea
development<br></span></span></b><span style="font-family: Roboto; font-size: 12pt;">Combros turns ordinary shoes into smart shoes, by creating small device attached to Biti’s
shoes to monitor the number of
steps, speed, heartbeat,… in order to collect data on daily activities, users behavior and give
the advices, encourage users to do more exercise for better health.</span><span style="font-family: Roboto; font-size: 12pt;">&nbsp;</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/cbmotion.png" style="width: 522px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p>

<p class="MsoNormal"><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b>Idea
execution<br></b></span></span><span style="font-family: Roboto; font-size: 12pt;">cBMotion device is attached to Biti’s shoes using the smart sensors in the field of motion
identification (accelerometer) to collect data about movement, vibrations, velocity of the user to evaluate the required parameters,…<br></span><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">Synchronize data real-time </span><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">to the server
system through connecting to tablet (Ipad).</span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Outcome<br></span></span></b><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">Developed successfully
the cBMotion device</span><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">
that attached to Biti’s smart shoes to improve kids’ movement habits.</span></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/cbmotion2.jpg',null),
            'slug' => str_slug('cBMotion'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Video',
                'name' => 'video',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://www.youtube.com/watch?v=zKbggnBNfpQ',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

        //4
        Post::where('slug','smart-warehouse')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'Smart Warehouse',
                null
            ),
            'title_seo' => 'Smart Warehouse',
            'description' => $this->multiLanguage(
                'Many factories in Vietnam are working in traditional ways: record keeping (paper), inventory tracking, analyze resource and information slowly, leading to all delays and errors.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p><img src="/storage/default/Our portfolio/smartwarehouse2.jpg" style="width: 680.656px;"><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b><br></b></span></span></p><p><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b>Issue<br></b></span></span><span style="font-family: Roboto; font-size: 12pt;">Many factories in Vietnam are working
in traditional ways: record keeping (paper), inventory tracking, analyze
resource and information slowly, leading to all delays and errors.<br></span><span style="font-size: 12pt; line-height: 115%; font-family: Roboto;">How to improve productivity in traditional
factories and meet these requirements</span><span style="font-size: 12pt; line-height: 115%;"><font face="Roboto">:<br></font></span><span style="font-family: Arial, sans-serif; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="font-family: Roboto; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">Locate and arrange items quickly </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">in warehouse.<br></font></span><span style="font-family: Arial, sans-serif; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">Check inventory periodically by
one click<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Analyze inventory data </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">to make decision
instantly<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Detect, categorize, arrange,…
items automatically</span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;"> in warehouse.</span><span style="font-family: Roboto; font-size: 12pt;">&nbsp;</span></p><p><img src="/storage/default/Our portfolio/smartwarehouse3.png" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p><p></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Idea
development<br></span></b><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Creating device, chip, sensor,
module to track each item/package</span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto"> in warehouse with identification technologies (RFID, UHF, UWB, iBeacon,…). This
method is wireless reading, scanning,
and searching that creates fast
way to inventory and find objects in stock.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Big Data is utilized to save and
synchronize all information </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">in the overall activity of the system.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">All in one on the system</span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">: import, export,
report, inventory,...</span><span style="font-family: Roboto; font-size: 12pt;">&nbsp;</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/smartwarehouse.jpg" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Idea
execution<br></span></b><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">The entire operation </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">of the warehouse
will be digitized and stored on
cloud computing.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Warehouse operations, production
orders, inventory, procurement proposal </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">will be quickly manipulated through a software system.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Customers can track
the order status directly on the system and the information is monitored between partners.</span></p>
                          <p></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/smartwarehouse2.jpg',null),
            'slug' => str_slug('smart-warehouse'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();


        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

        Post::where('slug','smart-farming')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'Smart Farming',
                null
            ),
            'title_seo' => 'Smart Farming',
            'description' => $this->multiLanguage(
                'The current crops are still using traditional farming methods which are labor intensive and ineffective.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p class="MsoNormal"><img src="/storage/default/Our portfolio/smartfarming2.jpg" style="width: 680.656px;"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN"><br></span></b></p><p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Issue<br></span></b><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">The current crops are still using traditional farming methods which are labor intensive
and ineffective.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">The existing solutions for high-tech agriculture are pricey compared to the capacity and
demand, as well as not suitable for the
diverse characteristics of each region in Vietnam.</span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size:12.0pt;line-height:115%;
font-family:Roboto;text-transform:uppercase;mso-ansi-language:IN">Idea
development<br></span></b><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Combros learns from
existing solutions and desires to bring high technology with reasonable prices that suitable to the needs and capabilities
of the farmers.&nbsp;</span><span style="font-size: 12pt; text-indent: -0.25in;"><font face="Roboto">Especially, high technology uses local
materials and innovative equipment with high productivity to reduce
manual labor.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Combros is gradually building modular, flexible solutions that apply to existing gardens and newly built gardens.</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/smartfarming.png" style="width: 519px;"><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;"><br></span></p>

<p class="MsoNormal"><span lang="IN" style="font-size: 12pt; line-height: 115%;"><font face="Roboto"><span style="text-transform: uppercase;"><b>Idea
execution<br></b></span></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">Combros has implemented the experimental process in HiFarm on 2 types of
plants: strawberry and tomato.<br></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">HiFarm’s automation process:<br></span><span style="font-family: Roboto; font-size: 12pt;">+ Stage 1: Automation control, semi-automation via
mobile application system.<br></span><span style="font-size: 12pt;"><font face="Roboto">+ Stage 2: Complete automation, engineers carry out crop
inspection through the application system.<br></font></span><span style="font-family: Arial, sans-serif; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="font-family: Roboto; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">Apply Big Data </span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%;"><font face="Roboto">to monitor activities and fully automate the cultivation of
different types of crops.<br></font></span><span style="font-family: Arial, sans-serif; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">•<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="font-family: Roboto; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">Build automation schedules </span><span style="font-family: Roboto; text-indent: -0.25in; font-size: 12pt; line-height: 115%;">(watering,
composting,...) on applications, monitor
environmental conditions and automatically
adjusted according to environmental conditions: temperature, humidity,
pH, EC,…</span><span style="font-family: Roboto; font-size: 12pt;">&nbsp;</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/smartfarming1.JPG" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p><p></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Outcome<br></span></span></b><span style="font-family: Roboto; font-size: 12pt;">Precisely control the amount of water at the
discretion of engineers, avoid waterlogging and water wasting: maximum error
for watering and composting and is +/- 5 liters.<br></span><span style="font-family: Roboto; font-size: 12pt;">It not only less depends on the weather but
also reduces manual labor, that makes farm efficiency reaches maximum levels.</span></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/smartfarming2.jpg',null),
            'slug' => str_slug('smart-farming'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Video',
                'name' => 'video',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://www.youtube.com/watch?v=y6OmMDx1MMo',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

        //5
        Post::where('slug','smart-office')->forcedelete();

        $postData = [
            'title' => $this->multiLanguage(
                'Smart Office',
                null
            ),
            'title_seo' => 'Smart Office',
            'description' => $this->multiLanguage(
                'For businesses from different scale, the issue of human resource management also challenges and requires a lot of time and effort.
Combros then finds a way to save time and bring higher efficiency.',
                null
            ),
            'content' => $this->multiLanguage(
                '                                    <p class="MsoNormal"><img src="/storage/default/Our portfolio/smartoffice3.jpg" style="width: 680.656px;"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><br></span></span></b></p><p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Issue<br></span></span></b><span style="font-family: Roboto; font-size: 12pt;">For businesses from different scale, the issue of human resource management also challenges and requires a lot of time and effort.<br></span><span style="font-family: Roboto; font-size: 12pt;">Combros then finds a way to save
time and bring higher efficiency.</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/smartoffice2.jpg" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p>

<p class="MsoNormal"><b><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;">Idea
development<br></span></span></b><span style="font-family: Roboto; font-size: 12pt;">Combros uses employee card, guest card,
fingerprint for identification.<br></span><span style="font-family: Roboto; font-size: 12pt;">With identification technology, user uses a
card for all such identity activities as controlling accessible right,
timekeeping.<br></span><span style="font-family: Roboto; font-size: 12pt;">Besides, this technology also has indoor
routing and instructions to move in the office building through identification.</span></p><p class="MsoNormal"><img src="/storage/default/Our portfolio/smartoffice.jpg" style="width: 680.656px;"><span style="font-family: Roboto; font-size: 12pt;"><br></span></p>

<p class="MsoNormal"><span lang="IN" style="font-size: 12pt; line-height: 115%; font-family: Roboto;"><span style="text-transform: uppercase;"><b>Idea
execution<br></b></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif; color: rgb(33, 37, 41);"><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;</span></span><span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -0.25in; font-size: 12pt; line-height: 115%; color: rgb(33, 37, 41);">Complete
the survey and evaluation of technology</span><span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -0.25in; font-size: 12pt; line-height: 115%; color: rgb(33, 37, 41);"> applied in
identification technology: RFID, UHF, UWB, iBeacon.<br></span></span><span style="text-indent: -0.25in; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 12pt; line-height: 115%; font-family: Roboto; color: rgb(33, 37, 41);">The
entire operation </span><span style="text-indent: -0.25in; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; line-height: 115%; color: rgb(33, 37, 41);"><font face="Roboto"><span style="font-size: 12pt;">of the office will be digitized and stored on cloud computing.</span><span style="font-size: 16px;"><br></span></font></span><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Arial, sans-serif; color: rgb(33, 37, 41);"><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;</span></span><span style="text-indent: -0.25in; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 12pt; line-height: 115%; font-family: Roboto; color: rgb(33, 37, 41);">Modernize
and automate the process </span><span style="text-indent: -0.25in; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 12pt; line-height: 115%; font-family: Roboto; color: rgb(33, 37, 41);">of timekeeping, controlling
accessible right, project
management getting current location and tracking office building information.</span></p>
                          ',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/Our portfolio/smartoffice3.jpg',null),
            'slug' => str_slug('smart-office'),
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 2]
        );
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 6]
        );

    }
}
