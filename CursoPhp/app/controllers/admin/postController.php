<?php

namespace App\Controllers\Admin;
use App\Controllers\BaseController;
use App\Models\BlogPost;
use Sirius\Validation\RuleFactory;
use Sirius\Validation\ErrorMessage;
use Sirius\Validation\Validator;


class postController extends BaseController {

    public function getIndex() {
           
            $blogPosts = BlogPost::all();
            return $this->render('admin/posts.twig', ['blogPosts' => $blogPosts]);

    }

    public function getCreate(){
        // admin/posts/create
        return $this->render('admin/insert-post.twig');

    }

    public function postCreate(){
        $result = false;
        $errors = [];
        $ruleFactory = new RuleFactory;
        $errorMessagePrototype = new ErrorMessage;

        // override just the error messages
        $ruleFactory->setMessages('content', null, null);
        
        $validator =  new Validator($ruleFactory, $errorMessagePrototype);
        $validator->add('title', 'required', array(), 'El titulo es requerido', 'title');
        $validator->add('content', 'required', array(), 'El contenido es requerido', 'content');

        $validator->addMessage('content', 'This value should be an email address');

        if ($validator->validate($_POST)){
            $blogPost = new BlogPost([
                'title' => $_POST['title'],
                'content' => $_POST['content']
            ]);

            if ($_POST['img']) {
                $blogPost->img_url = $_POST['img'];

            }

        $blogPost->save();
        $result = true;
        

        } else {
            $errors = $validator->getMessages();
    

        }


        
        return $this->render('admin/insert-post.twig', [
            'result' => $result,
            'errors' => $errors
             ]);

    }
}