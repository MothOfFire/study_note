# 回答 CSS 面试题

## 1. 说说你对盒子模型的理解?

- 什么是盒模型

  - 当浏览器对一个文档进行布局时，浏览器会依据盒模型原则来对每一个元素进行渲染，将每一个元素渲染成为一个矩形盒子。
    这个矩形盒子会有四个属性，从内到外分别是 content、padding、border、margin。

  - content 表示的是实质内容。

  - padding 表示的是内填充。

  - border 表示的盒子的边框。

  - margin 表示的是盒子的外边距。

- 标准盒模型和 IE 盒模型：最主要的区别还是在 width 和 height 的含义上

  - 标准盒模型：width、height 代表的是 content 的宽高

  - IE 盒模型：width、height 代表的是 content + padding + border 的宽高

  - 这 2 类模型是可以使用一个 css 属性来切换的，那就是 box-sizing。

    - box-sizing: content-box; 代表的是标准盒模型

    - box-sizing: border-box; 代表的是 IE 盒模型

- 浏览器最终显示盒子的大小 = content + padding + border

  - 在标准盒模型中，width 代表的是 content 的宽度，那么要计算其在浏览器渲染后盒模型最终大小，还要加上盒模型的 padding 和 border；

  - 在 IE 盒模型中，width 代表的是 content + padding + border，所以 width 就是盒模型最终在浏览器渲染后显示的宽大小；

- margin 虽然是盒子模型的组成部分，但是和盒子的大小没有关系，margin 决定的事盒子占据的位置。

## 2. css 选择器有哪些？优先级？哪些属性可以继承？

- 基本选择器：

  - id 选择器：通过元素的 ID 属性选择 HTML 元素。ID 以 # 开头

  - 类选择器：通过类名选择 HTML 元素，类名以 . 开头

  - 标签选择器：通过标签名称选择 HTML 元素

  - 通配符选择器：通过 \* 匹配任何元素

- 组合（关系）选择器：

  - 后代选择器：选择某个元素的后代元素。使用空格分隔

  - 子元素选择器：选择某个元素的直接子元素。使用 > 分隔

  - 相邻兄弟选择器：选择某个元素后面紧邻的兄弟元素。使用 + 分隔

  - 通用兄弟选择器：选择某个元素之后的所有兄弟元素。使用 ~ 分隔

- 群组选择器：同时选中对应选择器的元素，使用 , 分隔

- 属性选择器：选择带有指定属性的元素。

- 伪类选择器：选择特定状态或位置的元素

- 伪元素选择器：选择一个元素的某个部分而不是元素自己。

- 优先级：内联样式 > id 选择器 > 类、伪类选择器、属性选择器 > 元素、伪元素选择器 > 后代、子代、兄弟选择器

- 可继承：

  - visibility 元素可见性

  - 字体系列：font-weight 粗细、font-size 大小、font-style 风格

  - 文本系列：text-indent 缩进、text-align 水平对齐、color 颜色、line-height 行高

- 不可继承

  - display

  - 文本属性：vertical-align、text-decoration

  - 盒子模型的属性：宽度、高度、内外边距、边框等

  - 背景属性：背景图片、颜色、位置等

  - 定位属性：浮动、清除浮动、定位 position 等

  - 生成内容属性：content、counter-reset、counter-increment

  - 轮廓样式属性：outline-style、outline-width、outline-color、outline

  - 页面样式属性：size、page-break-before、page-break-after

## 3. 说说 em/px/rem/vh/vw 区别?

- CSS 中的单位分为绝对长度单位、相对长度单位

  - 绝对长度单位：cm、mm、in、px、pt、pc

  - 相对长度单位：em、ex、ch、rem、vw、vh、vmin、vmax、%

- em：相对于当前对象内文本的字体尺寸；如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）

  - 为了简化 `font-size` 的换算，我们需要在 css 中的 body 选择器中声明 `font-size= 62.5%`，这就使 em 值变为 `16px*62.5% = 10px` 这样 `12px = 1.2em`, `10px = 1em`, 也就是说只需要将你的原来的 px 数值除以 10，然后换上 em 作为单位就行了

  - em 的值并不是固定的

  - em 会继承父级元素的字体大小

  - em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸

  - 任意浏览器的默认字体高都是 16px

- px：像素，绝对长度单位；px 的大小和元素的其他属性无关

- rem：相对的只是 HTML 根元素`font-size`的值

  - 如果想要简化`font-size`的转化，我们可以在根元素 html 中加入`font-size: 62.5%`，这样页面中`1rem=10px`、`1.2rem=12px`、`1.4rem=14px`、`1.6rem=16px`;使得视觉、使用、书写都得到了极大的帮助

  - rem 单位可谓集相对大小和绝对大小的优点于一身

  - 和 em 不同的是 rem 总是相对于根元素，而不像 em 一样使用级联的方式来计算尺寸

- vw：就是根据窗口的宽度，分成 100 等份，100vw 就表示满宽，50vw 就表示一半宽。（vw 始终是针对窗口的宽）,即视窗（viewport）的宽度，1vw 等于视窗宽度的 1%

- vh：就是根据窗口的高度，分成 100 等份，100vh 就表示满高，50vh 就表示一半高。（vw 始终是针对窗口的高），即视窗（viewport）的高度，1vh 等于视窗高度的 1%

- 窗口的情况：在桌面端，指的是浏览器的可视区域；移动端指的就是布局视口

- 像 vw、vh，比较容易混淆的一个单位是 %，不过百分比宽泛的讲是相对于父元素

  - 对于普通定位元素就是我们理解的父元素

  - 对于 position: absolute;的元素是相对于已定位的父元素

  - 对于 position: fixed;的元素是相对于 ViewPort（可视窗口）
