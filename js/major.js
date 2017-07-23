function majorSearchResp(search){
    s=document.getElementById("majorSearchInput");
    s.value=search.q.value+"+site:lmaj7.github.io";
    document.getElementById("majorSearchForm").submit();
    return false;
}