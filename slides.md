---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
title: DiffusER
mdc: true
download: true
---

# [DiffusER](https://iclr.cc/virtual/2023/poster/11184)

## **Diffus**ion via **E**dit-based **R**econstruction

Machel Reid$^{1}$,
Vincent Josua Hellendoorn$^2$,
Graham Neubig$^3$

$^1$Google Research;
$^2$Software and Societal Systems Department
Carnegie Mellon University;  
$^3$Language Technologies Institute,
Carnegie Mellon University
Inspired Cognition;

## ICLR 2023

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/toonnyy8-notes/DiffusER" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

# Introduction

Revision and editing are central to how humans produce content;

<p class="text-xl">
Humans write and revise emails and papers, gradually produce works of art, and iterate on plans for a project.
</p>

<p class="text-xl">
Despite this, the most dominant paradigm in text generation is purely autoregressive, producing text left-to-right in a single pass.

- <p class="text-xl">Although models employing this single-pass form of generation are highly performant, they are <strong>Limited by the Inability to Refine Existing Text.</strong></p>

</p>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Introduction (cont.)

Revision and editing are central to how humans produce content;

<p class="text-xl">
To address this, this study propose DiffusER: Diffusion via Edit-based Reconstruction, a flexible method to apply edit-based generative processes to arbitrary text generation tasks.
</p>

<p class="text-xl">
DiffusER is not only a strong generative model in general, rivalling autoregressive models on several tasks spanning machine translation, summarization, and style transfer.

- <p>Can also perform other varieties of generation that standard autoregressive models are not well-suited for.</p>

  e.g. condition generation on a prototype, or an incomplete sequence, and continue revising based on previous edit steps.

</p>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
-->

---

# DiffusER

Edit-based Generation

<!-- DiffusER 的破壞與重構基於 $\text{\{Insert, Delete, Keep, Replace\}}$ 四種 edit operations -->

<p class="text-xl">

The **Corruption and Reconstruction** of DiffusER are based on four **Edit Operations** of $\text{\{Insert, Delete, Keep, Replace\}}$.

</p>

<img class="w-9/10 ml-auto mr-auto" src="/img/edit_process.jpg"/>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# DiffusER (cont.)

Edit-based Corruption

<p class="text-xl">

Corruption process $q(x_t|x_{t−1}; \mathcal{E}^{tag}, \mathcal{E}^{len})$ is parameterized by two distributions:

<div class="text-lg">

- the distribution over edit types $\mathcal{E}^{tag}$ (default 60% keep, 20% replace, 10% delete \& 10% insert),
- and the distribution over edit length $\mathcal{E}^{len}$. 

</div>

</p>

<img class="absolute bottom-2 left-1/4 w-3/4" src="/img/edit_process_1.jpg">

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# DiffusER (cont.)

Edit-based Reconstruction

<div class="text-xl grid grid-cols-2">

$\begin{aligned}p_{\theta}(x_{t-1}|x_t)&\sim p_{\theta}(x_{t-1},e_t|x_t)\\&=p^{gen}_{\theta}(x_{t-1}|x_t,e_t)p^{tag}_{\theta}(e_t|x_t)\end{aligned}$

<div class="relative"><div class="absolute z-1">

One can think of ER as two distinct steps:
- <p>identify which edits should take place (tagging process) and</p>
- <p>deciding which tokens should go in these positions (generative process).</p>

</div></div>

</div>


<img class="absolute bottom-2 right-1/3 w-2/3" src="/img/edit_process_1.jpg">

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
這種通過編輯操作的分解允許生成過程更可控和更靈活，因為它允許明確指定與要編輯的標記關聯的編輯類型，而不是讓兩個過程都是隱式的。
-->

---

# DiffusER (cont.)

Edit-based Reconstruction

<p class="text-xl">

$\begin{aligned}p_{\theta}(x_{t-1}|x_t)\sim p_{\theta}(x_{t-1},e_t|x_t)=p^{gen}_{\theta}(x_{t-1}|x_t,e_t)\underbrace{p^{tag}_{\theta}(e_t|x_t)}_{\text{predict edit op}}\end{aligned}$

</p>


<img src="/img/tagger.png">

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# DiffusER (cont.)

Edit-based Reconstruction

<p class="text-xl">

$\begin{aligned}p_{\theta}(x_{t-1}|x_t)\sim p_{\theta}(x_{t-1},e_t|x_t)=\underbrace{p^{gen}_{\theta}(x_{t-1}|x_t,e_t)}_\text{generate Ins. \& Rep.}p^{tag}_{\theta}(e_t|x_t)\end{aligned}$

$\text{<insert sentence:n>}\leftarrow p_{\theta}^{gen}(\cdots\text{<insert:n>}\cdots\text{<insert:n+1>}\cdots\underbrace{\text{<insert:n>}}_{predict\;insertion})$

</p>


<img src="/img/cm3.jpg">

<p class="text-xl">

In the generation step, **after Removing tokens selected for Deletion**, they sum a learned embedding to **Insert and Replace types** and generate the inserted and replaced sequences **Autoregressively**.

</p>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
-->

---

# DiffusER (cont.)

**Initialization Techniques** & Decoding

<p class="text-xl">

</p>


<img src="/img/init.jpg">


<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--

- AR Boostrap  
  先限制 DiffusER 的 op 使其以 AR 的形式生成文本後，再使用 DiffusER 對生成的文本執行編輯

- Source Boostrap  
  將 $x_T$ 設置為 source text，讓 DiffusER 對其進行修改

-->

---

# DiffusER (cont.)

Initialization Techniques & **Decoding**

<p class="text-xl">

- Greedy
- Beam
- Nucleus
- <span class="text-3xl">2D Beam</span>  
  **Sequence/Token Level** beam width of $b$ \& **Revision Level** beam width of $r$
  - 1. $r$ candidates are fed to the next step of the diffusion model.
    2. For each of $r$ hypotheses the next diffusion step is decoded with beam width of $b$. (This leads us to have $r \times b$ candidate hypotheses)
    3. Take the top $r$. This process repeats for each diffusion step thereafter.
  - Increases the beam count to $r \times b$ beams.

</p>


<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments

Machine Translation & Summarization

<p class="text-xl">

- Machine Translation  
  Use a Poisson distribution $\mathcal{E}^{len}(\lambda=3)$ over edit operation lengths in corruption process.
- Summarization  
  Different in nature from MT, summarization can be described as more conducive to edits as a good summary tends to preserve many parts of the input.  
  Use a Poisson distribution $\mathcal{E}^{len}(\lambda=8)$. **(to roughly model sentence boundaries)**

</p>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
摘要生成主要在於刪除多餘的段落並保留重要資訊，因此使用更高的 Poisson 變異數讓模型學習刪除段落。
-->

---

# Experiments (cont.)

Machine Translation & Summarization

<img src="/img/table_1.jpg"/>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments (cont.)

Text Style Transfer

<p class="text-xl">

Train two separate, style-specific (e.g. positive and negative) DiffusERs on the style-specific data. At test time, e.g.
- positive text → negative DIFFUSER model,
- negative text → positive DIFFUSER model.

</p>

<img src="/img/table_2.jpg"/>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Experiments (cont.)

<img src="/img/ablation.jpg"/>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
2D Beam Search 雖然需要較長的時間，但也具有比其他 decoding method 更高的效能。

與之前的 Non-AR 相比，DiffusER 只需要更少的生成步驟就能在摘要生成任務中得到良好的結果。
-->

---

# Conclusions

<br/>

<p class="text-2xl">

- Proposed DiffusER, an diffusion-based generative model for text using edits.
- <p>Shows improvements across the tasks considered,</p>
  <p class="text-xl">with improved generative flexibility via incremental text improvement, and compatibility with standard autoregressive models.</p>
- Even without task-specific techniques, DiffusER still has competitive performance with state of the art methods.

</p>

<SlideCurrentNo class="absolute bottom-4" />

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
