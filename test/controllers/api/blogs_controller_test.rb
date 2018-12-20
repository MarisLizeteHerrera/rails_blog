require 'test_helper'

class Api::BlogsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_blogs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_blogs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_blogs_create_url
    assert_response :success
  end

  test "should get update" do
    get api_blogs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_blogs_destroy_url
    assert_response :success
  end

end
