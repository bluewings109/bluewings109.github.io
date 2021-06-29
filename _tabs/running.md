---
title: 달리기 기록
icon: fas fa-running
order: 5
---
{% for element in site.data.running_records %}
{% assign month_distance = 0 %}
{% assign month_min = 0 %}
{% assign month_sec = 0 %}
<table>
    <theader>
    <tr align="center">
        <th colspan="4">{{ element.year }}년 {{ element.month }}월</th>
    </tr>
    </theader>
    <tbody align="center">
        <tr>
            <th>날짜</th>
            <th>페이스</th>
            <th>거리</th>
            <th>시간</th>
        </tr>
        {% for record in element.records %}
        {% assign sec_for_day_pace = 0 | plus: record.min | times: 60 | plus: record.sec %}
        {% assign pace_in_sec = sec_for_day_pace | divided_by: record.distance %}
        {% assign pace_min = pace_in_sec | divided_by: 60 | floor %}
        {% assign temp = 0 | plus: pace_min | times: 60 %}
        {% assign pace_sec = pace_in_sec | minus: temp | floor %}
        <tr>
            <td>{{ element.year }}/{{element.month}}/{{record.day}}</td>
            <td>{{ pace_min }}'{{ pace_sec }}"/km</td>
            <td>{{ record.distance }}km</td>
            <td>{{ record.min }}'{% if record.sec < 10 %}0{% endif %}{{ record.sec }}"</td>
        </tr>
        {% assign month_distance = month_distance | plus: record.distance %}
        {% assign month_min = month_min | plus: record.min %}
        {% assign month_sec = month_sec | plus: record.sec %}
        {% endfor %}
    </tbody>
</table>
{% assign total_sec = 0 | plus: month_min | times: 60 | plus: month_sec %}
{% assign month_hour = total_sec | divided_by: 3600 | floor %}
{% assign temp = 0 | plus: month_hour | times: 3600 %}
{% assign total_sec = total_sec | minus: temp %}
{% assign month_min = total_sec | divided_by: 60 | floor %}
{% assign temp = 0 | plus: month_min | times: 60 %}
{% assign total_sec = total_sec | minus: temp %}
{% assign month_sec = 0 | plus: total_sec %}
{{ element.year }}년 {{ element.month }}월 요약 <br>
총 {{ month_distance }} km {{ month_hour }}시간 {{month_min}}분 {{ month_sec }}초
<hr>
{% endfor %}