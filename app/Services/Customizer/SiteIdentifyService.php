<?php

namespace App\Services\Customizer;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use SaliproPham\LaravelMVCSP\Service;

class SiteIdentifyService extends Service
{
    use ValidatesRequests;

    public $siteIdentifySettings;
    public $logoList;
    public $languages;

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->languages = [
            ["value" => "en", "text" => "English"],
            ["value" => "vi", "text" => "Việt Nam"],
        ];

        $this->logoList = [
            ["value" => "image", "text" => "Image",
                "html" =>
                    sprintf('<br><div class="media-loader-parent">' .
                        '<div class="preview">' .
                        '<div class="preview-item">' .
                        '<img height="150" src="%s">' .
                        '</div>' .
                        '</div>' .
                        '<div class="input-group ">' .
                        '<span class="input-group-addon"><i class="fa fa-upload"></i></span>' .
                        '<input type="text " class="form-control media-loader" placeholder="Choose file" name="fe_logo_image" value="%s">' .
                        '</div>' .
                        '</div>',
                        setting('fe_logo_image', ''), setting('fe_logo_image', '')),
                "validates" => [
                    "fe_logo_image" => ['min:1', 'max:255'],
                ]],
            ["value" => "text", "text" => "Text",
                "html" =>
                    sprintf("<br><input class='form-control' name='fe_logo_text' type='text' value='%s' required minlength='1' maxlength='255'>",
                        setting('fe_logo_text', 'logo')),
                "validates" => [
                    "fe_logo_text" => ['min:1', 'max:255'],
                ]
            ],
        ];

        $this->setSelectedArray($this->languages, "value", [setting('language', 'en')]);
        $this->setSelectedArray($this->logoList, "value", [setting('fe_logo', 'image')], 'checked');
        $this->siteIdentifySettings = [
            "site_title" => [
                "type" => "custom-column",
                "required" => true,
                "text" => "Site title",
                "data" => [
                    [
                        "class" => "col-xs-4 pr-0",
                        "data" => [
                            "site_title" => [
                                "type" => "text",
                                "typeInput" => "text",
                                "text" => "Site title",
                                "placeholder" => "Enter site title",
                                "data" => setting('site_title', ''),
                                "minlength" => 1,
                                "maxlength" => 255,
                                "required" => true,
                                "validate" => ['required', 'min:1', 'max:255']
                            ]
                        ]
                    ],
                    [
                        "class" => "col-xs-2",
                        "data" => [
                            "separator" => [
                                "type" => "select",
                                "text" => "Separator",
                                "data" => [
                                    ["value" => "-", "text" => "-", "selected" => setting('separator', '|') == '-' ? true : false],
                                    ["value" => "|", "text" => "|", "selected" => setting('separator', '|') == '|' ? true : false],
                                ],
                                "required" => true,
                                "multiple" => false,
                                "validate" => ['required']
                            ],
                        ]
                    ],
                    [
                        "class" => "col-xs-2",
                        "data" => [
                            "text" => [
                                "type" => "text-only",
                                "text" => "Page name"
                            ],
                        ]
                    ]
                ]
            ],
            "logo" => [
                "type" => "custom-column",
                "required" => false,
                "text" => "",
                "data" => [
                    [
                        "class" => "col-xs-6 pr-0",
                        "data" => [
                            "fe_logo_image_light" => [
                                "type" => "image",
                                "typeInput" => "text",
                                "text" => "Logo Dark",
                                "placeholder" => "Choose light logo",
                                "data" => setting('fe_logo_image_light', ''),
                                "minlength" => 1,
                                "maxlength" => 255,
                                "required" => true,
                                "validate" => ['required']
                            ]
                        ]
                    ],
                    [
                        "class" => "col-xs-6",
                        "data" => [
                            "fe_logo_image_dark" => [
                                "type" => "image",
                                "typeInput" => "text",
                                "text" => "Logo Light",
                                "placeholder" => "Choose dark logo",
                                "data" => setting('fe_logo_image_dark', ''),
                                "minlength" => 1,
                                "maxlength" => 255,
                                "required" => true,
                                "validate" => ['required']
                            ]
                        ]
                    ]
                ]
            ],
            "site_cover_image" => [
                "type" => "image",
                "typeInput" => "text",
                "text" => "Site cover image",
                "placeholder" => "Enter site url",
                "data" => setting('site_cover_image', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => true,
                "validate" => ['required', 'min:1', 'max:255']
            ],
            "fe_fav" => [
                "type" => "image",
                "text" => "fav icon",
                "data" => setting('fe_fav', ''),
                "required" => true,
                "validate" => ['required']
            ],
            "fe_site_description" => [
                "type" => "textarea",
                "text" => "Site description",
                "placeholder" => "Enter site description",
                "data" => setting('fe_site_description', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['min:1', 'max:255']
            ],
            "fe_site_keywords" => [
                "type" => "textarea",
                "text" => "Site keywords",
                "placeholder" => "Enter site keywords",
                "data" => setting('fe_site_keywords', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['min:1', 'max:255']
            ],
            "language" => [
                "type" => "select",
                "text" => "Language",
                "data" => $this->languages,
                "required" => true,
                "multiple" => false,
                "validate" => ['required']
            ],
            "fe_footer_scripts" => [
                "type" => "textarea",
                "text" => "Footer scripts",
                "placeholder" => "Enter Footer scripts",
                "data" => setting('fe_footer_scripts', ''),
                "minlength" => "",
                "maxlength" => "",
                "required" => false,
                "validate" => []
            ],
            "site_url" => [
                "type" => "text",
                "typeInput" => "url",
                "text" => "Site url",
                "placeholder" => "Enter site url",
                "data" => setting('site_url', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['required', 'url', 'min:1', 'max:255']
            ],
            "phone" => [
                "type" => "text",
                "typeInput" => "text",
                "text" => "Phone",
                "placeholder" => "Enter phone",
                "data" => setting('phone', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['max:255']
            ],
            "email" => [
                "type" => "text",
                "typeInput" => "text",
                "text" => "Email",
                "placeholder" => "Enter email",
                "data" => setting('email', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['max:255']
            ],
            "website" => [
                "type" => "text",
                "typeInput" => "text",
                "text" => "Phone",
                "placeholder" => "Enter website",
                "data" => setting('website', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => false,
                "validate" => ['max:255']
            ],
            "address" => [
                "type" => "text",
                "typeInput" => "text",
                "text" => "Address",
                "placeholder" => "Enter address",
                "data" => setting('address', ''),
                "minlength" => 1,
                "maxlength" => 255,
                "required" => true,
                "validate" => ['max:255']
            ],
            "fe_copy_right_text" => [
                "type" => "html",
                "text" => "Copy right footer",
                "placeholder" => "Input copy right footer",
                "data" => setting('fe_copy_right_text', ''),
                "required" => false,
                "validate" => ['nullable']
            ]
        ];
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
                                case 'textarea':
                                    $validates[$k] = $child['validate'];
                                    break;
                                case 'image':
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
                case 'textarea':
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

    function saveSettings()
    {

        $res = (object)[
            'errorCode' => 200,
            'message' => 'Settings have been saved'
        ];
        $rules = $this->getSiteIdentifyValidates();
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

    function getSiteIdentifySettings()
    {
        return $this->siteIdentifySettings;
    }

    function getSiteIdentifyValidates()
    {
        return $this->getValidateFromData($this->siteIdentifySettings);
    }
}
