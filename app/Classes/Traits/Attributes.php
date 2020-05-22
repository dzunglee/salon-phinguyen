<?php


namespace App\Classes\Traits;


use App\Models\Attribute;

trait Attributes
{
    /**
     * @var array
     */

    /**
     * add custom attribute for current model
     * @param array $att
     */
    public function addAttribute($att = [])
    {
        $this->attributeList[] = $att;
    }

    /**
     * set relation to attributes
     */
    public function attributes()
    {
        return $this->hasMany(Attribute::class, 'entity_id', 'id');
    }

    /**
     * save attribute or array of attribute
     * @param $atts
     */
    public function updateOrCreateAttributes($atts)
    {
        if (is_array($atts)) {
            $idArr = [];
            foreach ($atts as &$att) {
                $att['entity_id'] = $this->id;
                $att['entity_type'] = self::class;
                $att['name'] = str_slug($att['display_name']);
                $attribute = Attribute::updateOrCreate(
                    ['entity_type' => $att['entity_type'], 'entity_id' => $att['entity_id'], 'name' => $att['name']], ['display_name' => $att['display_name'], 'type' => $att['type'], 'content' => $att['content']]);
                $idArr[] = $attribute->id;
            }

            $deleteAtts = Attribute::where('entity_id', $this->id)->where('entity_type', self::class)->get();
            foreach ($deleteAtts as $deleteAtt){
                if (!in_array($deleteAtt->id,$idArr)){
                    $deleteAtt->delete();
                }
            }
        } else {
            $atts['entity_id'] = $this->id;
            $atts['entity_type'] = self::class;
            Attribute::updateOrCreate(
                ['entity_type' => $atts['entity_type'], 'entity_id' => $atts['entity_type'], 'name' => $atts['name']], ['display_name' => $atts['display_name'], 'type' => $atts['type'], 'content' => $atts['content']]);
        }
    }

    /**
     * get attribute by entity
     * @return mixed
     */
    public function withAttributes($id)
    {
        return $this->where('id',$id)->with(['attributes' => function ($query) {
            $query->where('entity_type', self::class)->orderBy('created_at', 'asc');
        }])->first();
    }


    public function createWithAttributes($data = [])
    {
        $newAttributes = [];
        if (!is_array($this->attributeList)) {
            return $this->save($data);
        }
        foreach ($this->attributeList as $key => $attribute) {
            if (isset($data[$key])) {
                $attribute['content'] = $data[$key];
                $newAttributes[] = $attribute;
                unset($data[$key]);
            } else {
                $newAttributes[$key] = $attribute;
            }
        }
        $entity = $this->create($data);
        foreach ($newAttributes as &$attribute) {
            $attribute['entity_id'] = $entity->id;
        }
        $this->updateOrCreateAttributes($newAttributes);
        return true;
    }

}