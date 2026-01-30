<div align="center">
  <img src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" width="100px" alt="GitHub Readme Stats" />
  <h1 style="font-size: 28px; margin: 10px 0;">GitHub Readme Stats</h1>
  <p>Get dynamically generated GitHub stats on your READMEs!</p>
</div>

<p align="center">
<img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" />
  <br />
  <br />

</p>

# Why this fork?

I prefer using Cloudflare over Vercel, so this fork adapts GitHub Readme Stats to run on Cloudflare Workers

## 🙏 Attribution

This project is based on and inspired by  
**GitHub Readme Stats** by [Anurag Hazra](https://github.com/anuraghazra).

Original repository:  
https://github.com/anuraghazra/github-readme-stats

<p align="center">Love the project? Please consider <a href="https://www.paypal.me/anuraghazra">donating</a> to the original author to help it improve!</p>


## ❗Important Notices

> [!IMPORTANT]
> This is a **fork** of `anuraghazra/github-readme-stats`.
> Please **do not report issues from this repository to the original project**.
> Bugs and feature requests related to this fork should be reported **to me only**.

> [!IMPORTANT]
> This fork is designed for **Cloudflare Workers deployments**.
> Reliability depends on your Worker configuration, caching strategy, and GitHub API rate limits.
> For consistent results, self-hosting on your own Workers account is recommended.

> [!IMPORTANT]
> This repository is maintained on a **best-effort basis**.
> Issues and pull requests may be prioritized based on clarity, relevance to the Workers implementation, and community interest.

---

## 📊 GitHub Stats Card

```md
[![GitHub Stats](https://gh-stats.work/api?username=dchu096)](https://github.com/dchu096)
```

> [!TIP]
> By default, only **public repository activity** is included.
> To display private contributions, deploy your own instance and use a GitHub API token.
> See [Deploy on your own](#deploy-on-your-own).

> [!NOTE]
> Rank tiers follow the **Japanese academic grading system** used by the upstream GitHub Readme Stats project:
> **S (top 1%), A+, A, A-, B+, B, B-, C+**, and **C**.
>
> The global rank is calculated as a weighted percentile across commits, pull requests, reviews, issues, stars, and followers.
> The implementation is inherited from the original project and can be reviewed in
> [`src/calculateRank.js`](https://github.com/anuraghazra/github-readme-stats/blob/master/src/calculateRank.js).


<details>
  <summary>🙈 Hiding Individual Stats</summary>

You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options: `&hide=stars,commits,prs,issues,contribs`

```md
![dchu096's GitHub stats](https://gh-stats.work/api?username=dchu096&hide=contribs,prs)
```
</details>

<details>
<summary>📈 Showing additional individual stats</summary>
You can pass a query parameter `&show=` to show any specific additional stats with comma-separated values.

> Options: `&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`

```md
![dchu096's GitHub stats](https://gh-stats.work/api?username=dchu096&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)
```
</details>

<details>
<summary>🧩 Showing Icons</summary>

You can enable icons by adding `&show_icons=true` as a query parameter.

```md
![dchu096's GitHub stats](https://gh-stats.work/api?username=dchu096&show_icons=true)
```
</details>

<details>
<summary>🗓️ Showing commits count for a specific year</summary>

You can specify a year and fetch only the commits made in that year by passing `&commits_year=YYYY` as a query parameter.

```md
![dchu096's GitHub stats](https://gh-stats.work/api?username=dchu096&commits_year=2024)
```
</details>
