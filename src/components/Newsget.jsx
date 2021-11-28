newsApiClient.getTopHeadlines(

    new TopHeadlinesRequest.Builder()
        .q("bitcoin")
        .language("en")
        .build(),
    new NewsApiClient.ArticlesResponseCallback() {
      
      
        @Override
public void onSuccess(ArticleResponse response) {
    System.out.println(response.getArticles().get(0).getTitle());
}

@Override
public void onFailure(Throwable throwable) {
    System.out.println(throwable.getMessage());
}
    }
);

