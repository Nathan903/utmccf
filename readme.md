
## Using link shortener

1. Visit [tinyurl.com](https://tinyurl.com)
2. Use `utmccftiny-` as the alias (e.g., <b>utmccftiny-<em>2024easter</em></b>).
3. Create Link. The link will appear as utmccf.com/tiny/*something* (e.g., utmccf.com/tiny/***2024easter***)

## Infrastructure documentation

```mermaid
flowchart TD
subgraph s1["Wordpress.com: this is where you edit the contents"]
    n1(["utmccf.wordpress.com"]) 
    click n1 href "https://utmccf.wordpress.com" _blank
end
s1--"[clonewebsite.yml] clones site to folder every 20min"-->s2
subgraph s2["Github folder"]
  n3{{"./clean_utmccf.wordpress.com/"}}
end
s2--"Cloudflare Pages publishes contents in folder as static site"-->s3
subgraph s3["Cloudflare Pages"]
 n4(["utmccf.com"])
 click n4 href "https://utmccf.com" _blank
end
```

