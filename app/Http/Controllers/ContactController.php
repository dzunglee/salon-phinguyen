<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Services\ContactService;

class ContactController extends Controller
{
    /**
     * @var \App\Services\ContactService
     */
    public $service;

    public function __construct()
    {
        $this->service = service(ContactService::class);
    }

    public function index()
    {
        $this->title('Contacts');
        $this->description('');
        $this->breadcrumb(["text" => "Contacts"]);
        $data = $this->service->getList();
        return $this->view('pages.contact.index', compact('data'));
    }

    public function contact()
    {
        $data = $this->validate(request(), [
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'message' => 'required|max:1000'
        ]);
        Contact::create($data);
        return response()->json('success', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = $this->service->destroy($id);
        if ($res->errorCode == 200) {
            return response('Deleted', $res->errorCode);
        }
        return response($res->message, $res->errorCode);
    }
}
