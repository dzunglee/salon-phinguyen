<?php

namespace App\Services;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use SaliproPham\LaravelMVCSP\Service;
use Spatie\Permission\Models\Role;

class SettingService extends Service
{
    use ValidatesRequests;

    public $dateFormats;
    public $postPermalinkList;
    public $pagePermalinkList;
    public $customfieldList;
    public $timezones;

    public $generalSettings;
    public $mediaSettings;
    public $permalinkSettings;
    public $customfieldsSettings;
    public $adminRoles;

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->formatRoles();


        $this->postPermalinkList = [
            ["value" => "post/{id}", "text" => "Plain (post/12)"],
            ["value" => "{y}/{m}/{d}/{n}", "text" => "Date and name (2019/04/18/post-title)"],
            ["value" => "{c}/{n}", "text" => "Category and name (cat-name/post-title)"],
            ["value" => "{n}", "text" => "Post (/post-title)"],
        ];

        $this->pagePermalinkList = [
            ["value" => "page/{id}", "text" => "Plain (post/12)"],
            ["value" => "page/{n}", "text" => "Page name (/page/page-title)"],
            ["value" => "{c}/{n}", "text" => "Custom page ( prefix && page_id|page_name)",
                "html" =>
                    sprintf("<input name='page_custom_prefix' type='text' value='%s' required minlength='1' maxlength='255'><select name='page_custom_id_or_name' style='padding: 2px 0;'><option value='id' %s>Page id</option><option value='n' %s>Page name</option></select>",
                        setting('page_custom_prefix', 'page'), setting('page_custom_id_or_name', 'id') == 'id' ? 'selected' : '', setting('page_custom_id_or_name', 'id') == 'name' ? 'selected' : ''),
                "validates" => [
                    "page_custom_prefix" => ['required', 'min:1', 'max:255'],
                    "page_custom_id_or_name" => ['required', Rule::in(['id', 'n'])],
                ]
            ],
        ];

        $this->dateFormats = [
            ["value" => "M d, Y", "text" => "Jan 10, 2019"],
            ["value" => "Y-m-d", "text" => "2019-01-10"],
            ["value" => "m/d/Y", "text" => "01/10/2019"],
            ["value" => "d/m/Y", "text" => "10/01/2019"],
        ];
        $this->timezones = [
            ["value" => "-12", "text" => "(GMT-12:00) International Date Line West"],
            ["value" => "-11", "text" => "(GMT-11:00) Midway Island, Samoa"],
            ["value" => "-10", "text" => "(GMT-10:00) Hawaii"],
            ["value" => "-09", "text" => "(GMT-09:00) Alaska"],
            ["value" => "-08", "text" => "(GMT-08:00) Pacific Time (US & Canada)"],
            ["value" => "-08 (1)", "text" => "(GMT-08:00) Tijuana, Baja California"],
            ["value" => "-07", "text" => "(GMT-07:00) Arizona"],
            ["value" => "-07 (1)", "text" => "(GMT-07:00) Chihuahua, La Paz, Mazatlan"],
            ["value" => "-07 (2)", "text" => "(GMT-07:00) Mountain Time (US & Canada)"],
            ["value" => "-06", "text" => "(GMT-06:00) Central America"],
            ["value" => "-06 (1)", "text" => "(GMT-06:00) Central Time (US & Canada)"],
            ["value" => "-06 (2)", "text" => "(GMT-06:00) Guadalajara, Mexico City, Monterrey"],
            ["value" => "-06 (3)", "text" => "(GMT-06:00) Saskatchewan"],
            ["value" => "-05", "text" => "(GMT-05:00) Bogota, Lima, Quito, Rio Branco"],
            ["value" => "-05 (1)", "text" => "(GMT-05:00) Eastern Time (US & Canada)"],
            ["value" => "-05 (2)", "text" => "(GMT-05:00) Indiana (East)"],
            ["value" => "-04", "text" => "(GMT-04:00) Atlantic Time (Canada)"],
            ["value" => "-04 (1)", "text" => "(GMT-04:00) Caracas, La Paz"],
            ["value" => "-04 (2)", "text" => "(GMT-04:00) Manaus"],
            ["value" => "-04 (3)", "text" => "(GMT-04:00) Santiago"],
            ["value" => "-03", "text" => "(GMT-03:30) Newfoundland"],
            ["value" => "-03 (1)", "text" => "(GMT-03:00) Brasilia"],
            ["value" => "-03 (2)", "text" => "(GMT-03:00) Buenos Aires, Georgetown"],
            ["value" => "-03 (3)", "text" => "(GMT-03:00) Greenland"],
            ["value" => "-03 (4)", "text" => "(GMT-03:00) Montevideo"],
            ["value" => "-02", "text" => "(GMT-02:00) Mid-Atlantic"],
            ["value" => "-01", "text" => "(GMT-01:00) Cape Verde Is."],
            ["value" => "-01 (1)", "text" => "(GMT-01:00) Azores"],
            ["value" => "+00", "text" => "(GMT+00:00) Casablanca, Monrovia, Reykjavik"],
            ["value" => "+00 (1)", "text" => "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"],
            ["value" => "+01", "text" => "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"],
            ["value" => "+01 (1)", "text" => "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"],
            ["value" => "+01 (2)", "text" => "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"],
            ["value" => "+01 (3)", "text" => "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"],
            ["value" => "+01 (4)", "text" => "(GMT+01:00) West Central Africa"],
            ["value" => "+02", "text" => "(GMT+02:00) Amman"],
            ["value" => "+02 (1)", "text" => "(GMT+02:00) Athens, Bucharest, Istanbul"],
            ["value" => "+02 (2)", "text" => "(GMT+02:00) Beirut"],
            ["value" => "+02 (3)", "text" => "(GMT+02:00) Cairo"],
            ["value" => "+02 (4)", "text" => "(GMT+02:00) Harare, Pretoria"],
            ["value" => "+02 (5)", "text" => "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"],
            ["value" => "+02 (6)", "text" => "(GMT+02:00) Jerusalem"],
            ["value" => "+02 (7)", "text" => "(GMT+02:00) Minsk"],
            ["value" => "+02 (8)", "text" => "(GMT+02:00) Windhoek"],
            ["value" => "+03", "text" => "(GMT+03:00) Kuwait, Riyadh, Baghdad"],
            ["value" => "+03 (1)", "text" => "(GMT+03:00) Moscow, St. Petersburg, Volgograd"],
            ["value" => "+03 (2)", "text" => "(GMT+03:00) Nairobi"],
            ["value" => "+03 (3)", "text" => "(GMT+03:00) Tbilisi"],
            ["value" => "+03 (4)", "text" => "(GMT+03:30) Tehran"],
            ["value" => "+04", "text" => "(GMT+04:00) Abu Dhabi, Muscat"],
            ["value" => "+04 (1)", "text" => "(GMT+04:00) Baku"],
            ["value" => "+04 (2)", "text" => "(GMT+04:00) Yerevan"],
            ["value" => "+04 (3)", "text" => "(GMT+04:30) Kabul"],
            ["value" => "+05", "text" => "(GMT+05:00) Yekaterinburg"],
            ["value" => "+05 (1)", "text" => "(GMT+05:00) Islamabad, Karachi, Tashkent"],
            ["value" => "+05 (2)", "text" => "(GMT+05:30) Sri Jayawardenapura"],
            ["value" => "+05 (3)", "text" => "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"],
            ["value" => "+05 (4)", "text" => "(GMT+05:45) Kathmandu"],
            ["value" => "+06", "text" => "(GMT+06:00) Almaty, Novosibirsk"],
            ["value" => "+06 (1)", "text" => "(GMT+06:00) Astana, Dhaka"],
            ["value" => "+06 (2)", "text" => "(GMT+06:30) Yangon (Rangoon)"],
            ["value" => "+07", "text" => "(GMT+07:00) Bangkok, Hanoi, Jakarta"],
            ["value" => "+07 (1)", "text" => "(GMT+07:00) Krasnoyarsk"],
            ["value" => "+08", "text" => "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"],
            ["value" => "+08 (1)", "text" => "(GMT+08:00) Kuala Lumpur, Singapore"],
            ["value" => "+08 (2)", "text" => "(GMT+08:00) Irkutsk, Ulaan Bataar"],
            ["value" => "+08 (3)", "text" => "(GMT+08:00) Perth"],
            ["value" => "+08 (4)", "text" => "(GMT+08:00) Taipei"],
            ["value" => "+09", "text" => "(GMT+09:00) Osaka, Sapporo, Tokyo"],
            ["value" => "+09 (1)", "text" => "(GMT+09:00) Seoul"],
            ["value" => "+09 (2)", "text" => "(GMT+09:00) Yakutsk"],
            ["value" => "+09 (3)", "text" => "(GMT+09:30) Adelaide"],
            ["value" => "+09 (4)", "text" => "(GMT+09:30) Darwin"],
            ["value" => "+10", "text" => "(GMT+10:00) Brisbane"],
            ["value" => "+10 (1)", "text" => "(GMT+10:00) Canberra, Melbourne, Sydney"],
            ["value" => "+10 (2)", "text" => "(GMT+10:00) Hobart"],
            ["value" => "+10 (3)", "text" => "(GMT+10:00) Guam, Port Moresby"],
            ["value" => "+10 (4)", "text" => "(GMT+10:00) Vladivostok"],
            ["value" => "+11", "text" => "(GMT+11:00) Magadan, Solomon Is., New Caledonia"],
            ["value" => "+12", "text" => "(GMT+12:00) Auckland, Wellington"],
            ["value" => "+12 (1)", "text" => "(GMT+12:00) Fiji, Kamchatka, Marshall Is."],
            ["value" => "+13", "text" => "(GMT+13:00) Nuku'alofa"],
        ];

        // select item
        $this->setSelectedArray($this->dateFormats, "value", [setting('date_formats', 'F j, y')], 'checked');
        $this->setSelectedArray($this->timezones, "value", [setting('timezones', '+07')]);
        $this->setSelectedArray($this->adminRoles, "value", [setting('default_role', '1')]);

        $this->generalSettings = [
            "date_formats" => [
                "type" => "option",
                "text" => "Date format",
                "data" => $this->dateFormats,
                "required" => false,
                "validate" => ['required']
            ],
            "timezones" => [
                "type" => "select",
                "text" => "Timezones",
                "data" => $this->timezones,
                "required" => true,
                "multiple" => false,
                "validate" => ['required']
            ],
            "default_role" => [
                "type" => "select",
                "text" => "Default role",
                "data" => $this->adminRoles,
                "required" => true,
                "multiple" => false,
                "validate" => ['required']
            ],
//            "admin_email" => [
//                "type" => "text",
//                "typeInput" => "email",
//                "text" => "Admin email",
//                "placeholder" => "Enter admin email",
//                "data" => setting('admin_email', ''),
//                "minlength" => 1,
//                "maxlength" => 255,
//                "required" => true,
//                "validate" => ['required', 'email', 'min:1', 'max:255']
//            ],
            "items_per_page" => [
                "type" => "text",
                "typeInput" => "number",
                "text" => "Item per page",
                "placeholder" => "Enter number of item per page size",
                "data" => setting('items_per_page', 14),
                "minlength" => 1,
                "maxlength" => 150,
                "required" => true,
                "validate" => ['required', 'numeric', 'min:1', 'max:150']
            ],
            "copy_right_text" => [
                "type" => "html",
                "text" => "Copy right footer",
                "placeholder" => "Input copy right footer",
                "data" => setting('copy_right_text', ''),
                "required" => false,
                "validate" => ['nullable']
            ],
        ];

        $this->mediaSettings = [
            "post_max_size" => [
                "type" => "text",
                "typeInput" => "number",
                "text" => "Post max size (Mb)",
                "placeholder" => "Enter post max size",
                "data" => setting('post_max_size', '2'),
                "minlength" => 1,
                "maxlength" => 150,
                "required" => true,
                "validate" => ['required', 'numeric', 'min:1', 'max:150']
            ],
            "up_load_max_size" => [
                "type" => "text",
                "typeInput" => "number",
                "text" => "Upload max size (Mb)",
                "placeholder" => "Enter post max size",
                "data" => setting('up_load_max_size', '2'),
                "minlength" => 1,
                "maxlength" => 150,
                "required" => true,
                "validate" => ['required', 'numeric', 'min:1', 'max:150']
            ],
            "override_if_exists" => [
                "type" => "select",
                "text" => "Override if it exists",
                "data" => [
                    ["value" => 0, "text" => "No", "selected" => setting("override_if_exists", 0) == 0 ? 'selected' : ''],
                    ["value" => 1, "text" => "Yes", "selected" => setting("override_if_exists", 0) == 1 ? 'selected' : '']
                ],
                "required" => true,
                "multiple" => false,
                "validate" => []
            ],
            "default_view" => [
                "type" => "select",
                "text" => "Default view",
                "data" => [
                    ["value" => 'grid', "text" => "Grid", "selected" => setting("default_view", 'grid') == 'grid' ? 'selected' : ''],
                    ["value" => 'list', "text" => "List", "selected" => setting("default_view", 'grid') == 'list' ? 'selected' : '']
                ],
                "required" => true,
                "multiple" => false,
                "validate" => ['required']
            ],
            "organize_uploads_by_time" => [
                "type" => "select",
                "text" => "Organize my uploads into month- and year-based folders",
                "data" => [
                    ["value" => 0, "text" => "No", "selected" => setting("organize_uploads_by_time", false) == 0 ? 'selected' : ''],
                    ["value" => 1, "text" => "Yes", "selected" => setting("organize_uploads_by_time", false) == 1 ? 'selected' : '']
                ],
                "required" => true,
                "multiple" => false,
                "validate" => ['required']
            ],
            "thumbnail_size" => [
                "type" => "custom-column",
                "required" => false,
                "text" => "Thumbnail size (px) (keep ratio follow width or height)",
                "data" => [
                    [
                        "class" => "col-xs-6 col-md-2",
                        "data" => [
                            "thumbnail_width" => [
                                "type" => "text",
                                "typeInput" => "number",
                                "text" => "Thumbnail width",
                                "placeholder" => "Enter thumbnail width",
                                "data" => setting('thumbnail_width', ''),
                                "minlength" => 1,
                                "maxlength" => 3000,
                                "required" => false,
                                "validate" => ['nullable', 'numeric', 'min:1', 'max:3000']
                            ]
                        ]
                    ],
                    [
                        "class" => "col-xs-6 col-md-2",
                        "data" => [
                            "thumbnail_height" => [
                                "type" => "text",
                                "typeInput" => "number",
                                "text" => "Thumbnail height",
                                "placeholder" => "Enter thumbnail height",
                                "data" => setting('thumbnail_height', ''),
                                "minlength" => 1,
                                "maxlength" => 3000,
                                "required" => false,
                                "validate" => ['nullable', 'numeric', 'min:1', 'max:3000']
                            ]
                        ]
                    ]
                ]
            ],
            "default_sort" => [
                "type" => "custom-column",
                "required" => true,
                "text" => "Default sort",
                "data" => [
                    [
                        "class" => "col-xs-6 col-md-2",
                        "data" => [
                            "default_sort_date_or_name" => [
                                "type" => "select",
                                "text" => "Date or name",
                                "data" => [
                                    ["value" => "lastModified", "text" => "Date", "selected" => setting('default_sort_date_or_name', 'name') == 'lastModified' ? true : false],
                                    ["value" => "name", "text" => "Name", "selected" => setting('default_sort_date_or_name', 'name') == 'name' ? true : false],
                                ],
                                "required" => true,
                                "multiple" => false,
                                "validate" => ['required']
                            ],
                        ]
                    ],
                    [
                        "class" => "col-xs-6 col-md-2",
                        "data" => [
                            "default_sort_az_or_za" => [
                                "type" => "select",
                                "text" => "Date or name",
                                "data" => [
                                    ["value" => "asc", "text" => "A-Z", "selected" => setting('default_sort_az_or_za', 'asc') == 'asc' ? true : false],
                                    ["value" => "des", "text" => "Z-A", "selected" => setting('default_sort_az_or_za', 'asc') == 'des' ? true : false],
                                ],
                                "required" => true,
                                "multiple" => false,
                                "validate" => ['required']
                            ],
                        ]
                    ]
                ]
            ]
        ];


        $this->setSelectedArray($this->postPermalinkList, "value", [setting('post_permalink', 'post/{id}')], 'checked');
        $this->setSelectedArray($this->pagePermalinkList, "value", [setting('page_permalink', 'page/{id}')], 'checked');
        $this->permalinkSettings = [
            "post_permalink" => [
                "type" => "option",
                "text" => "Post",
                "data" => $this->postPermalinkList,
                "required" => true,
                "validate" => ['required']
            ],
            "page_permalink" => [
                "type" => "option",
                "text" => "Page",
                "data" => $this->pagePermalinkList,
                "required" => true,
                "validate" => ['required']
            ]
        ];

        $this->customfieldsSettings = [
            "select-all" => [
                "type" => "select-all",
            ],
            "richTextEditor" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "richTextEditor",
                    "text" => "Rich Text Editor",
                    'checked' => $this->checkCustomFields('richTextEditor')
                ],
                "required" => false,
                "validate" => []
            ],
            "text" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "text",
                    "text" => "Text",
                    'checked' => $this->checkCustomFields('text')
                ],
                "required" => false,
                "validate" => []
            ],
            "number" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "number",
                    "text" => "Number",
                    'checked' => $this->checkCustomFields('number')
                ],
                "required" => false,
                "validate" => []
            ],
            "email" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "email",
                    "text" => "Email",
                    'checked' => $this->checkCustomFields('email')
                ],
                "required" => false,
                "validate" => []
            ],
            "time" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "time",
                    "text" => "Time",
                    'checked' => $this->checkCustomFields('time')
                ],
                "required" => false,
                "validate" => []
            ],
            "boolean" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "boolean",
                    "text" => "Yes or No",
                    'checked' => $this->checkCustomFields('boolean')
                ],
                "required" => false,
                "validate" => []
            ],
            "image" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "image",
                    "text" => "Image",
                    'checked' => $this->checkCustomFields('image')
                ],
                "required" => false,
                "validate" => []
            ],
            "date" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "date",
                    "text" => "Date",
                    'checked' => $this->checkCustomFields('date')
                ],
                "required" => false,
                "validate" => []
            ],
            "dateRanger" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "dateRanger",
                    "text" => "Date Ranger",
                    'checked' => $this->checkCustomFields('dateRanger')
                ],
                "required" => false,
                "validate" => []
            ],
            "color" => [
                "type" => "checkbox",
                "data" => [
                    "value" => "color",
                    "text" => "Color",
                    'checked' => $this->checkCustomFields('color')
                ],
                "required" => false,
                "validate" => []
            ],
        ];
    }

    function getGeneralSettings()
    {
        return $this->generalSettings;
    }

    function getMediaSettings()
    {
        return $this->mediaSettings;
    }

    function getPermalinkSettings()
    {
        return $this->permalinkSettings;
    }

    function getCustomfieldsSettings()
    {
        return $this->customfieldsSettings;
    }

    function getGeneralSettingValidates()
    {
        return $this->getValidateFromData($this->generalSettings);
    }

    function getMediaSettingValidates()
    {
        return $this->getValidateFromData($this->mediaSettings);
    }

    function getPermalinkSettingValidates()
    {
        return $this->getValidateFromData($this->permalinkSettings);
    }

    function getCustomfieldsSettingValidates()
    {
        return $this->getValidateFromData($this->customfieldsSettings);
    }


    function getValidateFromData($data = [])
    {
        $validates = [];
        foreach ($data as $key => $item) {
            switch ($item['type']) {
                case 'custom-column':
                    foreach ($item['data'] as $childData) {
                        foreach ($childData['data'] as $k => $child) {
                            switch ($child['type']) {
                                case 'text':
                                    $validates[$k] = $child['validate'];
                                    break;
                                case 'select':
                                    $rules = [];
                                    foreach ($child['data'] as $select) {
                                        $rules[] = $select['value'];
                                    }
                                    $child['validate'][] = Rule::in($rules);
                                    $validates[$k] = $child['validate'];
                                    break;
                                case 'option':
                                    $rules = [];
                                    foreach ($child['data'] as $option) {
                                        $rules[] = $option['value'];
                                    }
                                    $child['validate'][] = Rule::in($rules);
                                    $validates[$k] = $child['validate'];
                                    break;
                            }
                        }
                    }
                    break;
                case 'text':
                    $validates[$key] = $item['validate'];
                    break;
                case 'image':
                    $validates[$key] = $item['validate'];
                    break;
                case 'select':
                    $rules = [];
                    foreach ($item['data'] as $select) {
                        $rules[] = $select['value'];
                    }
                    $item['validate'][] = Rule::in($rules);
                    $validates[$key] = $item['validate'];
                    break;
                case 'option':
                    $rules = [];
                    foreach ($item['data'] as $option) {
                        $rules[] = $option['value'];
                        if (isset($option['validates'])) {
                            $validates = array_merge($validates, $option['validates']);
                        }
                    }
                    $item['validate'][] = Rule::in($rules);
                    $validates[$key] = $item['validate'];
                    break;
                case 'checkbox':
                    $rules[] = $item['data']['value'];
                    if (isset($item['validates'])) {
                        $validates = array_merge($validates, $item['validates']);
                    }
                    $item['validate'][] = Rule::in($rules);
                    $validates[$key] = $item['validate'];
                    break;
                case 'html':
                    $validates[$key] = $item['validate'];
                    break;
            }
        }
        return $validates;
    }

    /**
     * Set 'selected' for each item in array
     * @param array $array
     * @param string $key
     * @param array $values
     * @param string $customKey
     * @throws \Exception
     */
    function setSelectedArray(&$array = [], $key = 'value', $values = [], $customKey = 'selected')
    {
        try {
            foreach ($array as &$item) {
                $item[$customKey] = in_array($item[$key], $values) ? true : false;
            }
        } catch (\Exception $e) {
            throw $e;
        }
    }

    function formatRoles()
    {
        $roles = Role::all();
        $formatRoles = [];
        foreach ($roles as $role) {
            array_push($formatRoles, ['value' => $role->id, 'text' => $role->name]);
        }
        $this->adminRoles = $formatRoles;
    }

    function saveSettings()
    {
        $res = (object)[
            'errorCode' => 200,
            'message' => 'Settings have been saved'
        ];
        $tab = request()->get('tab', 'general');
        switch ($tab) {
            case 'media' :
                $rules = $this->getMediaSettingValidates();
                break;
            case 'permalink' :
                $rules = $this->getPermalinkSettingValidates();
                break;
            case 'customfields' :
                $rules = [];
                $this->CustomFields();
                break;
            default:
                $rules = $this->getGeneralSettingValidates();
        }
        $data = $this->validate($this->request, $rules);
        try {
            foreach ($data as $key => $value) {
                if (!is_null($value))
                    \Setting::set($key, $value);
            }
        } catch (\Exception $e) {
            $res->errorCode = 1;
            $res->message = 'Can not update settings';
        }
        return $res;
    }

    function CustomFields()
    {
        $rules = $this->getCustomfieldsSettingValidates();
        $data = $this->validate($this->request, $rules);
        file_put_contents(base_path('database/dataJson/customfields.json'), json_encode($data));
    }

    function checkCustomFields($value)
    {
        $data = json_decode(file_get_contents(base_path('database/dataJson/customfields.json')), true);
        if (!empty($data)) {
            foreach ($data as $item) {
                if ($item === $value) {
                    return 1;
                }
            }
        }
        return 0;
    }

    function checkSelect()
    {
        $data = json_decode(file_get_contents(base_path('database/dataJson/customfields.json')), true);
        if (count($data) == 10) {
            return 1;
        } else {
            return 0;
        }
    }
}
