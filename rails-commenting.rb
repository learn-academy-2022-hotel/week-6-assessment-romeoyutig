# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # line 10 is shoveling to a super class, and line 11 is defining an index method.
    # ---2)
    @posts = BlogPost.all
  end
# the logic for the index method, index will get a list of all posts, as well as an end for the method.
  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end
# defining and ending a show method. similar to a search, show will use .find to locate by id
  # ---4)
  def new
    @post = BlogPost.new
  end
# defining a method called new, using .new in the logic. this will add the ability to create a new blog post.
  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
# defining a conditional statement for the create method, if the entry is valid, they will be redirected to a path.
  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end
# this lets the user edit by finding a certain element by id.
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
# similar to the last method, this uses a conditional to check if a post is valid before updating. it is also searching blogpost by the params id.
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end
# this redirects back to the original path once a post has been destroed.
  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
# this is requiring a set of inputs to be entered by the user. as well as allowing the title and content inputs to be entered.
