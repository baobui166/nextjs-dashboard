## Sever-side rendering là gì

- html sẽ được render bên phía sever
- Tiện lợi: lần load trang đầu tiên sẽ nhanh hơn client-side, bởi vì hầu hết các file js cần thiết đã được download và thực thì phía sever. Data cx sẽ được fetch ngay sau khi render HTML
- Bất lợi: tính tương tác sẽ không bằng với client-side vì nó cần load toàn bộ trang web và tải các file yêu cầu của nó
- Thân thiện hơn với SEO: các nội dung dễ dàng cho search engines to index.

- Có hai loại SSR:

* Static: HTML thường được tạo ra ngay tại build time
* Dynamic: HTML sẽ được tạo ra tại mỗi thời điểm nhận được 1 request

## Client-side rendering là gì

- html sẽ được render bên phía client
- Bất lợi: Trước khi run app thì cần tải các file js của trang web đó trước, sau đó fetch data sau khi các component được mount
- Tiện lợi: có khả năng tương tác cao khi tất cả các file code và content liên quan đến trang web đã được download và reder lên.
- Có vấn đề với SEO

## SEO (Search Engine Optimization)

# Hyration

- thêm các sự kiện để tương tác mà chúng ta đã bỏ mất khi HTML render phía sever.

# NextJS là gì

- là 1 framework của reactjs, cho phép chúng ta xây dựng tổ hợp fullstack app và web
- 4 thành phần chính của NextJS: Sever side rendering( có thể dùng Dynamic hoặc static), file-based routing conventions, data fetching and mutation(fetching trực tiếp trên sever, mutations ở Sever Action), optimization (image, Fonts, SEO, Preloading)

# Setup NextJS project

- npx creat-next-app@latest nameProject
- các thành phần phía sau bạn muốn dùng gì nhấn yes.

# Cách để Updates NextJS lên phiên bản mới

- To update your project to the latest Next.js version, just run this command in your project folder:

npm install next@latest react@latest react-dom@latest eslint-config-next@latest

# Defining routes and page

- Các tạo route: ví dụ muốn tạo route /cabin thì vào thì mục app tạo 1 folder có tên là cabin, trong thư mục này tạo 1 file js có tên là page.js (không được viết hoa), trong file này tạo ra component như bình thường. (tên folder là tên của route). Nếu muốn tạo thêm các route con của cabin thì vẫn sử dụng như cách trên để tạo ra thư mục trên (route con của cabin thì phải nằm trong thư mục cabin)

- Route / là file page.js nằm dưới 1 cấp folder app

# Các điều hướng giữa các trang

- Để có thể điều hướng qua lại giữa các trang chúng ta có thể dùng thể thẻ a, nhưng khi dùng thẻ này chúng ta sẽ gặp vấn đề hard loading. Để giải quyết vấn đề này thì dùng ta sẽ dùng thẻ Link mà Next đã cung cấp.
- <Link href="/cabins">Qua cabin nè</Link>

# Tạo layout

- Trong folder app lun có sẵn file layout.js, nếu bạn xóa nó sẽ tự động tạo lại. Bạn có thể setup layout của bạn tại đây, cấu trúc của nó được bao bởi tag html và các thành phần của layout thì đc chứa trong tag body.

- Nếu muốn đổi title của trang web bạn chỉ cần export 1 object có tên là metadata và có thuộc tính title, thuộc tính này có giá trị là gì thì title của trang web sẽ là giá trị đó nó.
- export const metadata = {
  title: "The Wild Oasis",
  };

# metadata

- In web development, metadata provides additional details about a webpage. Metadata is not visible to the users visiting the page. Instead, it works behind the scenes, embedded within the page's HTML, usually within the <head> element. This hidden information is crucial for search engines and other systems that need to understand your webpage's content better.
- why metadata important: Metadata plays a significant (có ý nghĩa) role in enhancing a webpage's SEO, making it more accessible (có thể truy cập) and understandable for search engines and social media platforms. Proper metadata helps search engines effectively index webpages, improving their ranking in search results. Additionally, metadata like Open Graph improves the appearance (vẻ bề ngoài) of shared links on social media, making the content more appealing (hấp dẫn) and informative for users.

# React Sever Component là gì

- là một fullstack architecture sử dụng cho các react app.
- giới thiệu sever được tính hợp 1 phần vào cây React component: sever components
- chúng ta sẽ viết code fontend bên cạnh code cho backend 1 cách tự nhiên giống như là viết React bình thường.
- nó không được kích hoạt mặc định khi tạo new project React, nó cần thực hiện bởi frameword Nextjs

# phân biệt client component và sever component

- client component: là component bình thường, được tạo với 'use client' trực tiếp trên các module.
- sever component: các component chỉ reder trên sever, có thể build backend với react, mặc định sẽ dùng cấu trúc RSC (giống NextJS)

# Các fetching data

- giống như viết js thuần, sử dụng async/await và fetch để lấy dữ liệu.

# thêm tính tương tác cho client component

- để có thể sử dụng được hook của react thì chúng ta cần chuyển sang client component, đê chuyển thì chỉ cần thêm 'use client' trên đầu component muốn sử dụng là được

# Cách tạo folder để không tạo thành route

- khi bạn muốn tạo 1 folder để chứa các component để tái sử dụng, hoặc folder gì đó mà không muốn nó tạo thành 1 route thì thường chúng ta sẽ thêm \_ trước tên folder

# Cách custom title của trang web

- nếu muốn có title mặc định như thì chỉ cần set up như sau

  - export const metadata = {
    title: "Cabins",
    }

- nếu muốn tạo ra title kết hợp thêm chữ sẽ có mặc định thì làm như sau
  - export const metadata = {
    title: {
    template: "%s / The Wild Oasis", // %s sẽ là nơi mà các title mặc định của trang web đã có mặc định sẽ thay thế vào đó
    default: "Welcome / The Wild Oasis" // dành cho trang chủ
    },
    }
- Có thể dùng hàm để thay đổi title:
- vd: muốn đổi title có tên của 1 dữ liệu nào đó được kéo ừ api lên thì làm như sau
- export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId)
  return { title: `Cabin ${name}` }
  }

# Cách thay đổi favicon

- trong folder app tạo ra file có tên là icon, nó có thể là hình, là svg...

# Loading và tối ưu hiệu năng đối với font

- do 1 vài vấn đề với các quy định GDRR khi sử dụng link hoặc import từ gg nên chúng ta down các file font đó từ sever của gg về, mang lại trải nghiệm nhanh hơn, ngon hơn.
- cách làm: chúng ta sẽ import font mà chúng ta muốn sử dụng từ package google, ví dụ: import { Josefin_Sans } from "next/font/google", sau đó cấu hình nó 1 chút:
  const josegfin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
  })
- font phải được khai báo và lưu dưới kiểu dữ liệu const
- bây giờ muốn sử dụng nó ở đâu thì dùng teamplate string đối với className và gọi nó như 1 biến với tên được kháo báo và truy vấn đến thuộc tính className.
- ví dụ: className={`${josegfin.className} bg-primary-900 text-primary-100 min-h-screen`}

# Tối ưu hiệu năng image với Image component

- đọc doc để rõ hơn
- nếu sử dụng path sting để hiện hình ảnh thì cần phải có thuộc tính width và height, nếu k có sẽ bị lỗi. Nếu import để dùng thì k cần width và height vẫn k bị lỗi.
- các thuộc tính hay sử dụng;
  - width, height
  - fill: khi muốn sử dụng hình đó làm background của khối cha của nó, nhớ dùng relative cho thẻ cha.
  - placeholder: khi dùng thuộc tính blur, khi reload hoặc lần đầu truy cập vào cần thời gian để fetch img, thì trong khoảng thời gian đợi ảnh chính lên thì nó sẽ hiện một ảnh mờ thể hiện như hiệu ứng loading
  - quality: chất lượng hình ảnh, có thể set từ 1 tới 100, số càng nhỏ thì chất lượng càng giảm và dung lượng của hình cũng giảm

# Cách fetch data

- sử dựng async/ await như code thuần

# tạo loading cho các route khác nhau

- trong mỗi folder tạo file loading.js để có thể sử dụng 1 kiểu loading khác nhau.

# SUSPENSE là gì và cách hoạt động

- là 1 react component dùng để giữ hoặc cô lập các component mà không sẵn sàng cho việc render (suspending)
- tại sao lại cần suspending:fetching data(với sự hỗ trợ của thư viện), loading code( với React lazy loading)

- bao khối muốn thể hiện loading lại vào trong thể Suspense, trên Suspense truyền component loading vào fallback
- <Suspense fallback={<Spinner />}>
  <CabinList />
  </Suspense>

- Where you place your Suspense boundaries will depend on a few things:

* How you want the user to experience the page as it streams.
* What content you want to prioritize (ưu tiên).
* If the components rely on data fetching.

- By moving data fetching down to the components that need it, you can create more granular Suspense boundaries. This allows you to stream specific components and prevent the UI from blocking.

# Cách handing error

- tạo ra file error.js ở folder app, sau đó thiết kế giao diện, component này nhận hai đối số là error và reset, cách caching error này chỉ để bắt lỗi rendering, không catch lỗi trong root layout (dùng global-error.js để catching toàn bộ layout)
- 'not-found' error: dùng cho hai trường hợp, đầu tiên là cho TH k có URL không tồn tại, hoặc trigger nó tại 1 trang bởi hàm notFound được cung cấp bởi nextjs

# static and dynamic rendering on server

- server và client component đều render trên server tại lần đầu render.
- các làm việc của nextjs là chia theo route. Mỗi route đều có thể render static (cũng có thể called pre-rendered) hoặc dynamic
- Partial pre-rendering là khả năng kết hợp hai các render static và dynamic lại với nhau trong cùng 1 route

# static rendering

- HTML được tạo ra tại build time, hoặc periodically in backgroud bởi re-fetching data
- hữu dụng khi data không thường xuyên thay đổi hoặc không cá nhân hóa cho user
- default rendering strategy
- khi deloy trên vercel, mỗi static route sẽ tự động hosted trên CDN( content delivery network)
- Whenever a user visits your application, the cached result is served.There are a couple of benefits of static rendering: Faster Websites, Reduced Server Load, SEO

# dynamic rendering

- HTML được tạo ra tại mỗi lần nhận được request
- hữu dụng khi data thường xuyên thay đổi hoặc cá nhân hóa cho user, rendering ra 1 route dựa vào thông tin của request
- 1 route sẽ được đổi sang dynamic trong 1 điều kiện nhất định
- With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:Real-Time Data, User-Specific Content, Request Time Information

# streaming

- Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" (khối) and progressively (dần dần) stream them from the server to the client as they become ready.
- By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.
- There are two ways you implement streaming in Next.js: At the page level, with the loading.tsx file; For specific components, with <Suspense>.

# SERVER ACTION

- React Server Actions allow you to run asynchronous code directly (trực tiếp) on the server. They eliminate (loại bỏ) the need to create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the server and can be invoked (gọi) from your Client or Server Components.

# Partial Prerendering (PPR).

- A new rendering model that allows you to combine the benefits of static and dynamic rendering in the same route.
- để sử dụng chúng ta thêm đoạn code sau vào next.config:
  experimental: {
  ppr: 'incremental', // The 'incremental' value allows you to adopt PPR for specific routes.
  }
- tiếp theo add đoạn code dưới này vào conponent bạn muốn sử dunngj :
  export const experimental_ppr = true;

# why use search Params

- There are a couple of benefits of implementing search with URL params:

* Bookmarkable (đánh dấu) and Shareable (chia sẻ) URLs
* Server-Side Rendering and Initial Load
* Analytics and Tracking (theo dõi)

# CDN, Serveless computing, Edge, ISR

- Mạng phân phối nội dung (CDN) là một mạng lưới gồm các máy chủ được kết nối với nhau giúp tăng tốc độ tải trang web cho các ứng dụng tiêu tốn nhiều dữ liệu.
- ISR : cho phép các developer update content cho static page in background, bất kể trang web đã được build và deloy.(dựa vào cơ chớ re-fetching data)

# Static side rendering

- output: "export", thêm đoạn này vào next.config..mjs

# Partial Pre-Rendering (đang thử nghiệm, không nên sử dụng trong môi trường production)

- Hầu hết các route k cần phải 100% static hoặc 100% dynamic, chúng ta có thể kết hợp cả hai thứ trong cùng 1 route( dùng partial pre-rendering để combines chúng)

# Caching in Nextjs

- Lưu trữ data đã lấy hoặc đã tính toán ở một nơi tạm thời khi muốn làm j đó trong tương lai. Thay vì phải re-fetch or re-computing lại data mỗi lần cần dùng đến
- khả năng caching của nextjs là rất tốt, mọi thứ có khả năng lưu trữ nó sẽ lưu trữ
- Nextjs cung cấp APIs cho việc xác thực lại bộ nhớ đệm: remove data from cache và update nó với fresh data
- Các cơ chế (mechanisms) caching cửa Nextjs: request memoization, data cache, full route cache, router cache. Trong đó 3 cái đầu tiên là ở server, cái cuối ở client

- request memoization: data fetch with similar request (same url and options in fethc function), one page request (one render, one user). No need to fetch at the top of tree: the same fetch in multiple component only makes one request (only in component not route handlers or server actions)
- data cache: data fetch in a route or single fetch request. Idenfinately, even across de-deloys. Data for static page + ISR when revalidated
- full route cache: entire static pages (HTML and RSC payload), unitl the data cache is invalidated (or app is re-deployed)

# The server - client boundary

- traditional: phân biệt rõ ràng back và front, giao tiếp với nhau bằng api.
- in nextjs: không có ranh giới giữa back và front, kết hợp giữa server và client code, cho phép build fullstack in one codebase, không cần dùng api làm trung gian quá nhìu lần

- client component: chỉ có thể import client component, có thể render client component và server component truyền qua như props
- server component: có thể import cả client và server component, render cx z.

# client component in server component

- nếu import server component vào client component thì nó sẽ thành client component

# Cách dùng server component trong client component

- truyền server component vào client component như props

# use context api in nextjs

- như code react nhớ thêm 'use client'

# creating api endpoint

# middleware

- middleware cho phép chúng ta run code trước khi 1 reuqest hoàn thành, sau đó dựa vào incoming của request, chúng ta có thể biến đổi response thông qua rewriting, redirecting, modifying the request or response headers, or responding directly.
- Middleware runs before cached content and routes are matched
- only one middleware function: need to export from middleware.js in the project root folder
- middlware needs to product a response (1 or 2)

- USECASE:

* read and set cookies and header
* authentication and authorization
* server side analytics
* redirect based on geolocation
* A/B testing

# Server actions

- là những function bất động bộ được thực thi trên server. Có thể gọi các function này từ server hoặc client component để sử lý các submission hoặc data mutations trong nextjs, không giống như server component server action yêu cầu 1 running web server. Behind the scenes: nextjs tạo ra các endpoint API cho mỗi server action. bất cứ khi nào server action được gọi, 1 POST request được thực hiện tới URL của nó

- quy ước: để xác định chỉ cần đặt từ khóa 'use server' ở đầu function async hoặc trên cùng của 1 file để đánh dấu các lần exports của file đều là server action

- server action có thể được gọi từ:

* thuộc tính action của <form> element (in server and client components)
* Event handle and useEffect (only client component)

- Trong server action chúng ta có thể:

* thể hiện data mutations (create, update, delete)
* update the UI with new data
* làm việc với cookies
  .....

# làm vớ route đối với các old project

- để tạo ra các route thì cần tạo ra các file trong folder pages với tên file là tên route, khi tạo ra các route còn thì route nào đó thì chỉ cần tạo ra folder trùng với route cha, sau đó tạo ra file chứa tên của segment trong dấu [].
- vd: localhost:8080/cabins/312, thì tạo ra folder cabins, sau đó tạo ra file [cabinsId].

# getStaticProps

- There are three things we're already doing to improve accessibility in our forms:

* Semantic HTML: Using semantic elements (<input>, <option>, etc) instead of <div>. This allows assistive (hỗ trợ) technologies (AT) to focus on the input elements and provide appropriate (phù hợp) contextual(ngữ cảnh) information to the user, making the form easier to navigate and understand.

* Labelling: Including <label> and the htmlFor attribute ensures that each form field has a descriptive text label. This improves AT support by providing context and also enhances usability (khả năng sử dụng) by allowing users to click on the label to focus on the corresponding (tương ứng) input field.

* Focus Outline: The fields are properly styled to show an outline when they are in focus. This is critical for accessibility as it visually indicates the active element on the page, helping both keyboard and screen reader users to understand where they are on the form. You can verify (xác minh) this by pressing tab.
