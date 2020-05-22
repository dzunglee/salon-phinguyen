<?php

namespace App\Presenters\Activity;
use App\Models\Activity;
use SaliproPham\LaravelMVCSP\Presenter;

class FormatActivityDateTimePresenter extends Presenter
{
    protected $keepOrigData = true;
    public function transform()
    {
        $originalData = $this->getOriginalData();
        // TODO: Implement transform() method.

        $activities = Activity::where('admin_id', me()->id)->orderBy('id', 'id')->simplePaginate(config('w3cms.items_per_page'));

        foreach ($activities as $activity){
            $activity->date = $activity->created_at->format(setting('date_formats'));
            $activity->time = $activity->created_at->format('g:ia');

        }

        $this->activities = $activities;
        $this->page = request()->input('page');
        $this->date = request()->input('date');
    }
}
