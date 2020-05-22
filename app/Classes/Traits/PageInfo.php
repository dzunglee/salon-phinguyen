<?php
/**
 * Created for w3cms project.
 * Author: salipro <sangph@suga.vn>
 * Date: 3/7/19
 */

namespace App\Classes\Traits;


use Illuminate\Routing\Controller;

trait PageInfo
{
    /**
     * @var string
     */
    private $_title = '';

    /**
     * @var string
     */
    private $_description = '';

    /**
     * @var array
     */
    private $_breadcrumb = [];


    /**
     * Set title
     *
     * @param $title
     * @return Controller
     */
    public function title($title): Controller
    {
        $this->_title = $title;
        return $this;
    }

    /**
     * Set description
     *
     * @param $description
     * @return Controller
     */
    public function description($description): Controller
    {
        $this->_description = $description;
        return $this;
    }

    /**
     * Set breadcrumb
     *
     * @param array ...$breadcrumb
     * @return Controller
     * @throws \Exception
     * @example
     *    breadcrumb(['text' => 'foo', 'url' => '/admin'],['text' => 'bar'])
     */
    public function breadcrumb(...$breadcrumb): Controller
    {
        $this->_validateBreadcrumb($breadcrumb);

        $this->_breadcrumb = (array) $breadcrumb;

        return $this;
    }

    /**
     * Add a item to breadcrumb
     *
     * @param array $breadcrumb
     * @return Controller
     * @throws \Exception
     */
    public function addBreadcrumb(array $breadcrumb): Controller
    {
        $this->_validateBreadcrumb([$breadcrumb]);

        array_push($this->_breadcrumb,$breadcrumb);

        return $this;
    }

    /**
     * Validate content breadcrumb.
     *
     * @param array $breadcrumb
     * @throws \Exception
     * @return bool
     */
    private function _validateBreadcrumb(array $breadcrumb): bool
    {
        foreach ($breadcrumb as $item) {
            if (!is_array($item) || !array_has($item, 'text')) {
                throw new  \Exception('Breadcrumb format error! Each item must be a array with "text" attribute at least.');
            }
        }

        return true;
    }

    /**
     * Fetch all variables of page
     *
     * @return array
     */
    public function vars(): array
    {
        return [
            'title' => $this->_title,
            'desc' => $this->_description,
            'breadcrumb' => $this->_breadcrumb
        ];
    }

    /**
     * Set view
     *
     * @param string $view
     * @param array $presenter
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function view($view,$presenter = [])
    {
        return view($view,$presenter,$this->vars());
    }
}