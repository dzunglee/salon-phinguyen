<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeMemberItemTableSeeder extends Seeder
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
        for ($i = 1; $i < 7; $i++) {
            Post::where('slug', str_slug('Member '.$i))->forcedelete();
        }
        $postData = [];
        $arrMember=[
            [
                'name' => 'Nguyen Duy Xuan Bach',
                'position' => 'DIRECTOR',
                'photo' => '/storage/default/Our team/cd_member_1.jpg',
                'detail' => '<p style="margin-bottom: 1rem;"><font face="Roboto, sans-serif"><span style="font-size: 16px;">Mr. Bach is working as Director at Combros.&nbsp;</span></font><span style="font-size: 16px; font-family: Roboto, sans-serif;">He has extensive experience in various projects such as researching on automation, environment, alarm device, quadrotor aircraft.</span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem;"><li style=""><font face="Roboto, sans-serif"><span style="font-size: 16px;">10 years in embedded systems, IoT, automation.</span></font></li><li style=""><font face="Roboto, sans-serif"><span style="font-size: 16px;">3 years in joining and guiding IT teams in Robocon Competition.</span></font></li><li style=""><font face="Roboto, sans-serif"><span style="font-size: 16px;">4 years in being Lecturer in Computer Engineering Department, University of Information Technology.</span><br></font></li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>Bachelor Degree of Information Technology in HCMC University of Technology</li><li>Master Degree of Computer Science</li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_1.png',
            ],
            [
                'name' => 'Vu Trong Thien',
                'position' =>'DEPUTY OF DIRECTOR',
                'photo' => '/storage/default/Our team/cd_member_2.jpg',
                'detail' => '<p style="margin-bottom: 1rem;"><span style="font-family: Roboto, sans-serif; font-size: 16px;">Mr. Thien is working as Deputy of Director at Combros.&nbsp;</span></p><p style="margin-bottom: 1rem;"><span style="font-family: Roboto, sans-serif; font-size: 16px;">He has extensive experience in various projects such as researching on IoT technology platform, wireless sensor network.</span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem;"><li style=""><span style="font-family: Roboto, sans-serif; font-size: 16px;">7 years in embedded systems, IoT, automation.</span><br></li><li style=""><span style="font-family: Roboto, sans-serif; font-size: 16px;">4 years in development of software, system and website.</span><br></li><li style=""><font face="Roboto, sans-serif"><span style="font-size: 16px;">3 years in joining and guiding IT teams in Robocon Competition.</span><br></font></li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem;"><li style=""><span style="font-family: Roboto, sans-serif; font-size: 16px;">Bachelor Degree of Information Technology in HCMC University of Technology</span></li><li style=""><span style="font-family: Roboto, sans-serif; font-size: 16px;">Master Degree of Computer Science</span><br><br></li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_2.png'
            ],
            [
                'name' => 'Nguyen Le Khanh Thien',
                'position' =>'TEAM LEADER',
                'photo' => '/storage/default/Our team/cd_member_3.jpg',
                'detail' => '<p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
    Roboto">Mr. Thien is working as Team Leader in Firmware Development at Combros.
    <o:p></o:p></span></p><p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;">
    
    </p><p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
    Roboto">He has extensive experience in various projects such as firmware
    development for embedded systems, linux systems, signal control, sensors,
    signal processing.<o:p></o:p></span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>4 years in embedded systems, IoT, automation.</li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>Bachelor Degree of Computer Science and Engineering in HCMC University of Technology.</li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_3.png'
            ],
            [
                'name' => 'Bui Hoang Thinh',
                'position' =>'TEAM LEADER',
                'photo' => '/storage/default/Our team/cd_member_4.jpg',
                'detail' => '<p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">Mr. Thinh is working as Team Leader in Hardware Design at Combros. <o:p></o:p></span></p><p class="MsoNormal">

</p><p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">He has extensive experience in various projects such as hardware
platform design for embedded systems, IoT, industrial electricity.<o:p></o:p></span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>4 years in embedded systems, IoT, automation.</li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>Bachelor Degree of Computer Science and Engineering in HCMC University of Technology.</li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_4.png'
            ],
            [
                'name' => 'Do Nhu Nam',
                'position' =>'TEAM LEADER',
                'photo' => '/storage/default/Our team/cd_member_5.jpg',
                'detail' => '<p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">Mr. Nam is working as Team Leader in Product Management at Combros. <o:p></o:p></span></p><p style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;">

</p><p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">He has extensive experience in product management, manufacturing
management.<o:p></o:p></span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>9 years
in product management.&nbsp;</li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li><span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">Bachelor Degree of Physical Electronics in University of
Science.</span><p class="MsoNormal" style="margin-left:.5in;text-indent:-.25in;mso-list:l0 level1 lfo1;
tab-stops:list .5in"><span style="font-size:12.0pt;line-height:115%;
font-family:Roboto"><o:p></o:p></span></p></li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_5.png'
            ],
            [
                'name' => 'Nguyen Hoang Duy Kha',
                'position' =>'TEAM LEADER',
                'photo' => '/storage/default/Our team/cd_member_6.jpg',
                'detail' => '<p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">Mr. Kha is working as Team Leader in Mechanical and Electrical at
Combros. <o:p></o:p></span></p><p style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;">

</p><p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto">He has extensive experience in various fields such as liquid, gas
system, solenoid valve, electrical system, IO signal control system, fiber
sensor for robot system, servo motor.&nbsp;<o:p></o:p></span></p><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Quick facts</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>8 years
in semiconductor equipment and working experience in Asia countries such as
Japan, Taiwan, Korea, Singapore, China.&nbsp;</li></ul><h5 style="margin-top: 0px; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; font-size: 1.25rem; font-family: Roboto, sans-serif;">Higher education</h5><ul style="margin-bottom: 1rem; font-family: Roboto, sans-serif; font-size: 16px;"><li>B<span style="text-indent: -0.25in; font-size: 12pt; line-height: 115%; font-family: Roboto;">achelor Degree of Mechanical Engineering in HCMC University
of Technology.</span><p class="MsoNormal" style="margin-left:.5in;text-indent:-.25in;mso-list:l0 level1 lfo1;
tab-stops:list .5in"><span style="font-size:12.0pt;line-height:115%;
font-family:Roboto"><o:p></o:p></span></p></li></ul>',
                'background-image-detail' => '/storage/default/Our team/member_6.png'
            ],

        ];

        foreach($arrMember as $item){
            array_push($postData,[
                'title' => $this->multiLanguage(
                    $item['name'],
                    null
                ),
                'title_seo' => $item['name'],
                'description' => $this->multiLanguage(
                    null,
                    null
                ),
                'content' => $this->multiLanguage(
                    null,
                    null
                ),
                'post_type' => null,
                'editor' => 1,
                'author' => 1,
                'photo' => $this->multiLanguage($item['photo'],null),
                'slug' => str_slug('Member '.$i),
                'category_id' => null,
                'is_published' => 1,
                'created_at' => date("Y-m-d h:m:s"),
                'attribute' => [
                    'position' => $this->multiLanguage(
                        $item['position'],
                        null
                    ),
                    'detail' => $this->multiLanguage(
                        $item['detail'],
                        null
                    ),
                    'background-image-detail' => $this->multiLanguage(
                        $item['background-image-detail'],
                        null
                    ),
                ]
            ]);
        }

        foreach ($postData as $key => $item){
            $attribute = $item['attribute'];
            unset($item['attribute']);
            DB::table('posts')->insert($item);
            $post = Post::all()->last();
            $attributeData = [
                [
                    'display_name' => 'Position',
                    'name' => str_slug('Position'),
                    'type' => 'text',
                    'content' => $attribute['position'],
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'Detail ',
                    'name' => str_slug('Detail'),
                    'type' => 'richTextEditor',
                    'content' => $attribute['detail'],
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'Background image detail',
                    'name' => str_slug('Background image detail'),
                    'type' => 'text',
                    'content' => $attribute['background-image-detail'],
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
            ];
            foreach ($attributeData as $attributeDatum) {
                DB::table('attributes')->insert($attributeDatum);
            }
            DB::table('post_tag')->insert(
                ['post_id' => $post->id, 'tag_id' => 4]
            );
        }
    }
}
