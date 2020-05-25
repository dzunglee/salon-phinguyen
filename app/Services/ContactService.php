<?php

namespace App\Services;

use App\Models\Contact;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class ContactService extends Service
{
    public function getList()
    {
        return Contact::query()->orderBy('created_at', 'desc')->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function destroy($id)
    {
        $res = (object)[
            'errorCode' => 200,
            'message' => 'Delete contact successfully'
        ];
        if (!Contact::destroy($id)) {
            $res->errorCode = 1;
            $res->message = 'Can not delete contact';
        }
        return $res;
    }
}
