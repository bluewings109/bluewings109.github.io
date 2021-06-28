---
title: Chirpy Theme Post 작성법
date: 2021-06-19 00:00:48 +0900
categories: [Jekyll, 포스팅]
tags: [jekyll]     # TAG names should always be lowercase
math: true
mermaid: true
---

이 포스트는 <a href="https://github.com/cotes2020/jekyll-theme-chirpy/wiki" target="_blank">
```Jekyll-Theme-Chirpy Wiki```
</a> 를 참고하여 작성하였음. 


## 파일명 및 경로
{프로젝트 루트 디렉토리}/_post 아래에 YYYY-MM-DD-TITLE.EXTENSION 의 형식으로 작성하면 된다.  
단, EXTENSION 은 'md' 혹은 'markdown'만 허용됨.
  

## Front-Matter
기본적으로, 아래와 같은 Front Matter를 설정해야한다.
```yaml
---
title: 제목
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG] # TAG 는 소문자로 작성할 것
---
```
> 참고 : *layout* 변수는 생략시 `post`로 default로 설정되므로 별도로 설정해주지 않아도 된다.
  

## Timezone of date
포스트의 작성일을 정확하게하기 위해서는 아래 두가지를 모두 설정해야한다.  
1. `_config.yml` 에 `timezone` 세팅  
2. 각 포스트의 Front Matter 의 `date` 변수에 timezone 세팅.  
    `+/-TTTT` 형식이다. 예) +0900 (한국)
  

## Categories 및 Tags
각 포스트의 `categories` 는 최대 2개까지(Top Category / Sub Category) 설정가능.  
`tags`는 개수 제한 없음.
```yaml
---
categories: [일상, 달리기]
tags: [10km완주]
---
```
  

## 목차 (ToC : Table of Content)
포스트에 ```<h2>``` 혹은 ```<h3>``` 로 설정된 제목이 있으면, 포스트의 오른쪽에 목차를 보여주는 기능임.  
```_config.yml``` 에 ```toc``` 변수의 값을 true/false 로 설정하여 global 한 설정을 제어 할 수 있음.  
특정 포스트만 false로 설정하고 싶은 경우, 해당 포스트의 Front Matter 에 아래와 같이 toc 변수를 등록한다.  
```yaml
---
toc: false
---
```
  

## 댓글
Github Pages 는 정적페이지만을 호스팅하므로 자체적인 댓글기능은 지원하지 않는다.  
하지만 Disqus 등의 댓글기능을 제공하는 외부 서비스를 이용허면 댓글기능을 사용 할 수 있으며, Chirpy Theme에서는 간단한 설정만으로 쉽게 댓글기능을 이용 할 수 있다.  
자세한 내용은 ```여기``` 를 참고!(추후 링크 추가 예정)
  

## Mathematics
성능상의 이유로, Mathematics 기능(Mathjax를 이용한 수식표현기능)은 디폴트로 로드되지 않도록 설정되어 있다.  
아래와 같이 설정하면 사용가능하다.
```yaml
---
math: true
---
```
아래와 같이 사용할 수 있다.  
* 입력
```markdown
This formula $f(x) = x^2$ is an example. 
```  
* 출력  
$f(x) = x^2$
  
  
## Mermaid
Mermaid는 텍스트를 다이어그램으로 렌더링해주는 Javascript 기반의 툴이다.  
Mermaid를 사용하기 위해서는 Front Matter에 아래와 같이 설정한다.  
c
아래와 같이 사용할 수 있다.  
* 입력
~~~markdown
```mermaid
  graph LR
  A(입력)-->B[연산]
  B-->C(출력)
```
~~~  
* 출력
```mermaid
graph LR
A(입력)-->B[연산]
B-->C(출력)
```  

## Images
### 미리보기 이미지
아래와 같이 Front Matter 를 설정하면 포스트의 맨 위에 이미지를 넣을 수 있다.  
```yaml
---
image:
  src: /path/to/image/file
  alt: image alternative text
---
```
  
### 이미지 캡션
이미지 아래에 이탤릭 스트링(언더바로 감싸면됨)을 넣으면 된다.  
* 입력
```markdown
![이미지 대체 텍스트](/assets/img/asics_virtual_run_medal_10km.jpeg)
_여기에 캡션을 넣으면 됨_
```  

* 출력  
  
![test](/assets/img/asics_virtual_run_medal_10km.jpeg)
_여기에 캡션을 넣으면 됨_  

### 이미지 사이즈
```width``` 및 ```height``` 속성을 추가하여 이미지 사이즈를 조정할 수 있다.  
(```width``` 또는 ```height``` 하나만 넣으면 자동으로 비율이 조절됨)
* 입력
```markdown
![이미지 대체 텍스트](/assets/img/asics_virtual_run_medal_10km.jpeg){: width="100"}  
```  
* 출력  
![이미지 대체 텍스트](/assets/img/asics_virtual_run_medal_10km.jpeg){: width="100"}  

### 이미지 위치
기본적으로 이미지는 가운데 정렬되나, ```normal```, ```left```, ```right``` 속성을 추가하여 위치를 지정 할 수 있다.  
* 입력
```markdown
![이미지 대체 텍스트](/assets/img/asics_virtual_run_medal_10km.jpeg){: .right width="100"}  
정렬을 하면  
이런식으로  
글이
배치된다
```  
* 출력  
![이미지 대체 텍스트](/assets/img/asics_virtual_run_medal_10km.jpeg){: .right width="100"}  
오른쪽  
정렬을 하면  
이런식으로  
글이  
배치된다

## 고정된 포스트
HOME의 최상단에 특정 포스트를 고정하기 위해서는 Front Matter에 pin 속성을 true로 설정하면 된다.  
```yaml
---
pin: true
---
```
고정된 포스트들은 최근 포스트 부터 차례로 보여진다.  

## 코드 블럭
```` ```language```` 를 사용하면 Syntax Highlighting과 함께 라인넘버가 들어간 형태로 코드블럭을 작성 할 수 있다.  
* 입력  
````
```c
#incldue <stdio.h>
int main(void){
  printf("Hello World!\n");
  return 0;
}
````
* 출력  
```c
#incldue <stdio.h>
int main(void) {
    printf("Hello World!\n");
    return 0;
}
```  
> 주의 : Chirpy theme에서는 {% raw %} {%highlight LANGUAGE %} {% endraw %} 및 {% raw %} highlight LANGUAGE linenos %} {% endraw %} 는 사용할 수 없다.  

## Liquid Codes
Liquid를 그대로 출력하고 싶다면, ```{% raw %}{%{% endraw %} raw %}``` 와 ```{% raw %}{%{% endraw %} endraw %}```  사이에 작성하면 된다.  
* 입력  
  
````
{% raw %}{%{% endraw %} raw %}
```liquid
{% raw %}
{% if product.title contains 'Pack' %}  
  This product's title contains the word Pack.  
{% endif %}  
{% endraw %}  
```
{% raw %}{%{% endraw %} endraw %}
````  
  
* 출력  
  
{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}