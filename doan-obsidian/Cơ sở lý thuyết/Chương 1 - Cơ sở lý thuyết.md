[[Mục lục]]
## 1.1 Lý thuyết về microservices
#### 1.1.1 Microservices là gì?

Microservices (kiến trúc microservices) là một mô hình kiến trúc phần mềm mà ứng dụng (từ lớn đến rất phức tạp) được chia thành các dịch vụ nhỏ, độc lập, và tự quản lý. Mỗi dịch vụ nhỏ trong kiến trúc microservices thực hiện một chức năng cụ thể hoặc một tập hợp các chức năng liên quan và có khả năng giao tiếp với các dịch vụ khác thông qua các giao thức như HTTP, gRPC, hoặc message queues. Kiến trúc microservices tập trung vào việc tách biệt các thành phần của ứng dụng để tạo ra sự linh hoạt, tái sử dụng, và quản lý dễ dàng hơn trong phát triển và triển khai ứng dụng.

![[Microservices Overview.png]]

Theo Sam Newman trong cuốn *Building Microservices*, các đặc điểm chính của kiến trúc microservices bao gồm:
1. **Phát triển độc lập**: Mỗi dịch vụ trong kiến trúc microservices thực hiện một chức năng riêng biệt điều này cho phép mỗi microservices có khả năng phát triển (develop), triển khai (deploy), quản lý (manage), duy trì (maintain) độc lập.
2. **Hướng lĩnh vực kinh doanh**: tổ chức các microservices dựa trên lĩnh vực kinh doanh hoặc chức năng cụ thể của ứng dụng, thay vì dựa trên cấu trúc công nghệ hoặc chia theo các lớp cơ sở dữ liệu.
3. **Độc lập trạng thái**: Một microservice không nên chia sẻ hoặc phụ thuộc vào trạng thái của các microservices khác.
4. **Kích thước của một microservices:** Là một đặc điểm quan trọng. Một ứng dụng có thể chia thành bao nhiêu microservices? Làm sao để chia microservices mà vẫn đảm bảo tính khả thi của dự án vừa đảm bảo mỗi microservices vẫn đảm bảo những yêu cầu cần có?
5. **Khả năng thay đổi linh hoạt:** Đảm bảo các microservices có khả năng thích nghi và thay đổi một cách dễ dàng trong môi trường phát triển và vận hành.
6. **Kết hợp giữa kiến trúc và tổ chức:** Một khía cạnh quan trọng trong việc thiết kế và quản lý các dự án microservices.

Kiến trúc microservices có nhiều ưu điểm như khả năng mở rộng tốt, dễ quản lý và nâng cấp, tạo điều kiện thuận lợi cho các nhóm phát triển làm việc độc lập trên các phần của ứng dụng. Tuy nhiên, cũng có thách thức như quản lý tăng số lượng dịch vụ, đảm bảo tính đồng nhất trong các phiên bản, và quản lý các vấn đề về giao tiếp giữa các dịch vụ
#### 1.1.2 Đặc điểm của microservice?
##### a. Phát triển và triển khai độc lập
Phát triển và triển khai độc lập (Independent Deployability) là một trong những lợi ích quan trọng của kiến trúc microservices. Nó đề cập đến khả năng triển khai và cập nhật các microservice một cách độc lập mà không cần ảnh hưởng đến các phần khác của hệ thống.

Điều này cho phép hệ thống có tính linh hoạt, cho phép các nhóm phát triển (team) làm việc độc lập trên các phần khác này của ứng dụng mà không cần phụ thuộc và phần khác. Điều này vừa giúp tăng tính linh hoạt, tăng tốc quá trình phát triển vừa giúp vận dụng một số quy trình phát triển phần mềm mới như scrum và agile.

![[Independent Deployability.png]]

Việc phát triển độc lập còn cho phép khả năng tích hợp và triển khai liên tục (CI/CD). Ứng dụng có thể triển khai các cập nhật và sửa lỗi một cách thường xuyên hơn, giảm thiểu thời gian giữa việc phát triển và triển khai. Điều này được các công ty công nghệ hướng sản phẩm (product) thường xuyên vận dụng. Ngoài ra, việc phát triển độc lập cho phép ứng dụng có thể tái sử dụng những microserves mà không cần thay đổi source code. 

Việc triển khai độc lập cho phép mở rộng các phần của ứng dụng mà có nhu cầu mà không ảnh hưởng đến các phần khác. Ví dụ: ứng dụng có thể triển khai thêm instances của các microservice cụ thể mà có khối lượng công việc cao hơn mà không cần mở rộng toàn bộ ứng dụng (gây lãng phí tài nguyên). Kết hợp với tính năng mở rộng tự độc của các dịch vụ điện toán đám mây (cloud) giúp ứng dụng có thể mở rộng (scale) nhanh chóng mà không làm gián đoạn dịch vụ.

Một trong những lợi ích khác là cho phép ứng dụng, hoặc các microservices có thể được triển khai một cách phân tán (distributed). Ví dụ các microservice có thể triển khai trên nhiều data center trên toàn thế giới và kết nối với nhau thông qua mạng doanh nghiệp tốc độ cao. Việc triển khai này có thể triển khai cả trên *public cloud* lẫn kết hợp *private cloud* của doanh nghiệp. Một trong những công nghệ chính được sử dụng cho điều này là *containerization*.

Tuy nhiên, việc triển khai độc lập cũng đòi hỏi sự quản lý và kiểm soát cẩn thận. Các quy trình tự động hóa để kiểm soát việc triển khai, theo dõi sự phụ thuộc giữa các dịch vụ, và đảm bảo tính nhất quán giữa các phiên bản của các microservices.
##### b. Hướng lĩnh vực kinh doanh
Hướng lĩnh vực kinh doanh (Modeled Around a Business Domain) là một trong những nguyên tắc quan trọng trong thiết kế kiến trúc microservices. Nguyên tắc này đề xuất việc tổ chức các microservices dựa trên lĩnh vực kinh doanh hoặc chức năng cụ thể của ứng dụng, chứ không phải dựa trên cấu trúc công nghệ hoặc chia theo các lớp cơ sở dữ liệu. 

Mỗi microservice nên thực hiện một chức năng hoặc một tập hợp các chức năng liên quan đến một lĩnh vực kinh doanh cụ thể. Chẳng hạn, có thể có microservices cho quản lý sản phẩm, quản lý đơn hàng, thanh toán, quản lý người dùng, và những lĩnh vực khác. Bằng cách tổ chức microservices xung quanh các lĩnh vực kinh doanh, việc tích hợp các dịch vụ trở nên dễ dàng hơn. Các microservices liên quan đến cùng một lĩnh vực thường có cấu trúc dữ liệu và giao diện giao tiếp tương tự. Mô hình này cho phép các nhóm phát triển (team) làm việc độc lập trên các lĩnh vực kinh doanh khác nhau của ứng dụng. Điều này tạo điều kiện thuận lợi cho tính linh hoạt và tốc độ phát triển.

![[Modeled Around a Business Domain.png]]

Ví dụ: Khi mỗi lỗi bất ngờ xuất hiện ở microservices quản lý sản phẩm, đội chịu trách nhiệm phát triển microservice này có thể nhanh chóng sửa lỗi với thời gian tính bằng giờ (thường từ 6-48 tiếng tùy theo lỗi). Điều này cũng tương tự với việc tích hợp một tính năng mới.

Ngoài ra, việc quản lý các microservices dựa trên lĩnh vực kinh doanh giúp tối ưu hóa quản lý dự án và triển khai. Các nhóm phát triển và quản lý có thể tập trung vào một phần cụ thể của ứng dụng. Các microservices trong cùng một lĩnh vực kinh doanh thường sử dụng cùng một công nghệ và mô hình dữ liệu. Điều này giúp đảm bảo tính nhất quán và dễ dàng hiểu và duy trì. Điều này phù hợp với mô hình scrum và agile, nơi mà một team thường bao gồm toàn bộ các cá nhân có thể thực hiện toàn bộ tác vụ  (dev, tester, BA,....) liên quan đến một nhóm công nghệ nhất định.

Tóm lại, hướng lĩnh vực kinh doanh trong kiến trúc microservices tạo điều kiện thuận lợi cho tính linh hoạt, tối ưu hóa quản lý, và tích hợp dễ dàng bằng cách tổ chức các microservices xung quanh các lĩnh vực kinh doanh hoặc chức năng cụ thể của ứng dụng. Điều này giúp tạo ra một kiến trúc dễ quản lý và dễ phát triển trong các dự án phức tạp.

##### c. Độc lập về trạng thái
Độc lập về trạng (Owning Their Own State) đề xuất rằng mỗi microservice nên sở hữu và quản lý trạng thái (state) của riêng, trạng thái ở đây cũng có thể hiểu là dữ liệu (data). Điều này có nghĩa rằng một microservices không nên chia sẻ hoặc phụ thuộc vào trạng thái của các microservices khác.

> Độc lập về trạng thái cho phép ứng dụng microservices phát triển và triển khai độc lập.

Bằng cách sở hữu trạng thái của riêng mình, mỗi microservice có khả năng độc lập và tự quản lý trạng thái của nó. Điều này tạo ra tính độc lập và tự động hóa trong việc triển khai và quản lý. Mỗi microservice có thể được triển khai và mở rộng một cách độc lập mà không cần lo lắng về trạng thái của các dịch vụ khác. Điều này tạo điều kiện thuận lợi cho việc tối ưu hóa và mở rộng dự án.

Microservice sở hữu trạng thái của riêng mình giúp giảm thiểu sự phụ thuộc giữa các dịch vụ. Không cần chia sẻ trạng thái, việc tích hợp giữa các microservices trở nên đơn giản hơn và ít khả năng gây ra lỗi liên quan đến trạng thái. Điều này giúp bảo vệ trạng thái của microservice khỏi việc truy cập trái phép từ các dịch vụ khác. Mỗi microservice có quyền kiểm soát và bảo vệ dữ liệu trạng thái của mình.

Tóm lại, trong kiến trúc microservices đề xuất rằng mỗi microservice nên có trách nhiệm sở hữu và quản lý trạng thái của riêng mình. Điều này giúp tạo ra tính độc lập, tích hợp dễ dàng, và bảo mật trong kiến trúc microservices, đồng thời tối ưu hóa quản lý và phát triển.
##### d. Kích thước của một microservices
Kích thước của một microservices có thể biến đổi rộng rãi tùy thuộc vào trường hợp sử dụng cụ thể, yêu cầu của ứng dụng và các nguyên tắc được áp dụng bởi nhóm phát triển. Không có định nghĩa cụ thể về kích thước của một microservice dựa trên số dòng mã (code) hoặc các ràng buộc tài nguyên cụ thể. 

Thay vào đó, kích thước của một microservice nên được xác định dựa trên chức năng của nó và nguyên tắc "single responsibility", nguyên tắc này đề xuất rằng một microservice nên có một mục đích duy nhất, được định rõ từ đầu. Nó nên thực hiện một chức năng cụ thể hoặc một tập hợp các chức năng có liên quan chặt chẽ.

![[Size of microservices systems.png]]

Vì microservices thường nhỏ và tập trung vào một nhiệm vụ cụ thể. Chúng không nên quá phức tạp hoặc cố gắng xử lý quá nhiều trách nhiệm khác nhau. Microservices nên được thiết kế để độc lập và tự quản lý. Chúng không nên phụ thuộc quá nhiều vào các microservices khác hoặc chia sẻ cơ sở dữ liệu với các dịch vụ khác.

Microservices nên được thiết kế để tương tác chặt chẽ (cohension), điều này có nghĩa là sự thay đổi của một microservice không nên có tác động lớn đến các dịch vụ khác. Microservices nên được thiết kế để tích hợp dễ dàng, điều này giúp giảm thiểu sự phụ thuộc giữa các microservices và làm cho phát triển và triển khai độc lập trở nên đơn giản hơn và ít gây ra lỗi liên quan đến trạng thái.

Lưu ý rằng không có một đáp án cố định cho kích thước của một microservice và kích thước phù hợp có thể thay đổi từ một ứng dụng này sang ứng dụng khác. Quan trọng là cân nhắc giữa độ độc lập (đủ nhỏ để quản lý và bảo trì) và chức năng (đủ lớn để thực hiện mục tiêu kinh doanh).  Điều này nên dựa trên yêu cầu cụ thể của ứng dụng, các phương thức phát triển và cơ cấu tổ chức khi xác định kích thước của các microservices.
##### e. Tính linh hoạt
Tính linh hoạt (Flexibility) trong kiến trúc microservices là một yếu tố quan trọng để đảm bảo rằng các microservices có khả năng thích nghi và thay đổi một cách dễ dàng trong môi trường phát triển và vận hành. Tính linh hoạt này đóng vai trò quan trọng trong việc tạo điều kiện thuận lợi cho sự phát triển, triển khai và quản lý các dịch vụ microservices. 

Kiến trúc microservices nên cho phép tích hợp và triển khai các microservices mới một cách nhanh chóng và dễ dàng. Các dịch vụ mới có thể được thêm vào hệ thống mà không gây ảnh hưởng đến các dịch vụ hiện có. Kết hợp với việc tối ưu hóa quy trình phát triển bằng việc sử dụng các quy trình phát triển như tích hợp liên tục (CI) và triển khai liên tục (CD) để tạo điều kiện cho việc triển khai và kiểm tra các thay đổi một cách tự động và nhanh chóng. 

Việc mỗi microservice thực hiện một nhiệm vụ cụ thể hoặc một tập hợp các chức năng liên quan đến nhau tạo điều kiện thuận lợi cho việc thay đổi hoặc cải tiến một phần cụ thể của hệ thống mà không cần thay đổi toàn bộ kiến trúc. Bằng việc quản lý phiên bản (version control) cho các microservices, công cụ thường sử dụng là *git*. Cho phép dễ dàng quay lại phiên bản trước đó nếu cần và thực hiện các cập nhật một cách có kiểm soát.

Tính linh hoạt trong kiến trúc microservices giúp đảm bảo rằng hệ thống có thể thích nghi với các yêu cầu mới, cải tiến và biến đổi trong môi trường kinh doanh và công nghệ một cách hiệu quả. Nó cũng giúp đảm bảo rằng việc phát triển và quản lý các dịch vụ microservices là linh hoạt và hiệu quả.
##### f. Kết hợp giữa kiến trúc và tổ chức
Sự kết giữa kiến trúc và tổ chức (Alignment of Architecture and Organization) là một khía cạnh quan trọng trong việc thiết kế và quản lý các hệ thống phần mềm phức tạp, bao gồm cả những hệ thống được xây dựng bằng kiến trúc microservices. Điều này liên quan đến việc đảm bảo rằng cấu trúc của kiến trúc phần mềm và cấu trúc của đội ngũ phát triển hoặc tổ chức của bạn là phù hợp và hỗ trợ lẫn nhau. Khi kiến trúc và tổ chức được kết hợp tốt, nó có thể dẫn đến quá trình phát triển trôi chảy hơn, giao tiếp cải thiện và hiệu suất hệ thống tổng thể tốt hơn.

![[Alignment of Architecture and Organization.png]]

Việc phát triển ứng dụng microservice thường sử dụng mô hình Scrum, là một cách tiếp cận hiệu quả để phát triển phần mềm linh hoạt. Bằng cách chia dự án thành các dịch vụ microservices độc lập và sử dụng Scrum cho từng dịch vụ, ta có thể đảm bảo tính linh hoạt trong phát triển và triển khai. Mỗi dịch vụ có một Product Owner riêng, và việc tích hợp và kiểm tra tổng thể được thực hiện một cách liên tục. Kết hợp này cho phép đáp ứng nhanh chóng yêu cầu thay đổi và cung cấp giá trị liên tục cho khách hàng.

Tóm lại, việc đồng bộ hóa kiến trúc và tổ chức là quan trọng đối với sự thành công của các dự án phần mềm phức tạp, đặc biệt là trong trường hợp sử dụng kiến trúc microservices. Điều này đòi hỏi kế hoạch cẩn thận, giao tiếp hiệu quả và cam kết đảm bảo rằng cấu trúc của đội ngũ của bạn phù hợp với cấu trúc của kiến trúc của bạn. Khi thực hiện tốt, sự phối hợp này có thể dẫn đến quy trình phát triển linh hoạt, hiệu quả và nhanh nhạy hơn.
#### 1.1.3 Tại sao lại sử dụng microservice?
##### a. Monolithic architecture
Monolithic architecture là một kiến trúc phần mềm hoặc ứng dụng truyền thống, nơi mà ứng dụng được xây dựng dưới dạng một khối duy nhất, tức là tất cả các thành phần và chức năng của ứng dụng hoặc hệ thống nằm trong một mã nguồn duy nhất.

Với tính đơn giản trong quá trình phát triển ban đầu, dễ quản lý và hiệu suất tốt trong một số trường hợp, kiến trúc này thích hợp cho các dự án nhỏ hoặc khi bắt đầu một dự án mới. Tuy nhiên, khi ứng dụng trở nên lớn và phức tạp hơn hoặc đòi hỏi tính linh hoạt và quản lý hiệu quả, việc sử dụng kiến trúc microservices có thể trở thành lựa chọn hợp lý hơn để đáp ứng các yêu cầu phức tạp và thay đổi nhanh chóng của ứng dụng.
##### b. So sánh monolith và microservices architecture
Dưới đây là một bảng so sánh giữa kiến trúc Monolith và kiến trúc Microservices theo các khía cạnh khác nhau.

![[Monolithic vs microservices.png]]

| Tiêu chí              | Kiến trúc Monolith        | Kiến trúc Microservices    |
|-----------------------|------------------------|--------------------------|
| **Đặc điểm cơ bản**    | Toàn bộ ứng dụng xây dựng và triển khai dưới dạng một khối duy nhất, chia sẻ cùng một mã nguồn. | Ứng dụng phân tách thành các dịch vụ nhỏ, độc lập, mỗi dịch vụ tập trung vào một nhiệm vụ cụ thể. |
| **Kích thước và phân tách** | Thường lớn và khó phân tách thành các thành phần riêng biệt. | Nhỏ gọn và dễ phân tách thành các dịch vụ riêng lẻ. |
| **Phát triển và triển khai**  | Yêu cầu quy trình phát triển và triển khai lớn hơn do toàn bộ ứng dụng cập nhật cùng một lúc. | Linh hoạt với quy trình phát triển và triển khai cho từng dịch vụ độc lập. |
| **Quản lý và bảo trì**    | Quản lý và bảo trì có thể phức tạp do tích hợp mạnh mẽ và quy mô lớn. | Quản lý và bảo trì dễ dàng hơn do tính độc lập của các dịch vụ. |
| **Hiệu suất và mở rộng** | Có thể có hiệu suất tốt trong môi trường nội bộ nhưng mở rộng có thể khó khăn. | Mở rộng dễ dàng và linh hoạt hơn, đặc biệt với Docker và Kubernetes. |
| **Giao tiếp và tích hợp**  | Sử dụng giao thức nội bộ và có tích hợp đơn giản hơn. | Thường sử dụng giao thức HTTP/REST hoặc gRPC và đòi hỏi tích hợp qua mạng, có thể phức tạp hơn. |

Bên trên chỉ là so sánh đơn giản giữ  Monolith và Microservice. Sự lựa chọn kiến trúc cho một dự án, ứng dụng cụ thể phụ thuộc vào yêu cầu cụ thể của dự án và tổ chức. Monolith thích hợp cho các ứng dụng đơn giản hoặc khi bắt đầu một dự án mới, trong khi microservices thường được ưa chuộng cho các ứng dụng đòi hỏi tính linh hoạt, mở rộng và quản lý hiệu quả hơn. Vì vậy ở đề tài này kiến trúc microservices được lựa chọn và tập trung phát triển.

#### 1.1.4 Giao tiếp của các ứng dụng microservices
##### a. Tổng quan các mô hình giao tiếp
Giao tiếp trong kiến trúc Microservices là một yếu tố quan trọng và phức tạp, đóng vai trò trọng yếu trong việc kết nối và làm cho các microservices trở nên độc lập và hoạt động cùng nhau để tạo thành một ứng dụng hoàn chỉnh. Với sự phân tán của các microservice trên nhiều máy chủ và môi trường, việc hiểu và triển khai các phong cách giao tiếp đúng cách trở thành một thách thức quan trọng. 

Các mô hình giao tiếp (communication pattern) giữa những microservices phổ biến bao gồm như HTTP/RESTful APIs, gRPC, Message Queues, và GraphQL. Tất cả trong số này đều cung cấp các cách tiếp cận đa dạng để đáp ứng các nhu cầu cụ thể của dự án Microservices, đồng thời đảm bảo tính mở rộng, độ tin cậy và hiệu suất của hệ thống. Tùy vào từng ngữ cảnh này, việc lựa chọn và triển khai các phong cách giao tiếp phù hợp là một phần quan trọng trong quá trình phát triển và quản lý kiến trúc Microservices. Hãy cũng xem xét mô hình bên dưới:

![[Microservice Communication Styles.png]]
##### b. Syschronous blocking vs Asynchronous nonblocking
Trong kiến trúc microservices, Syschronous blocking và Asynchronous nonblocking là hai mô hình giao tiếp khác nhau để xử lý các nhiệm vụ và hoạt động yêu cầu sự kết hợp giữ hai hay nhiều microservices.

![[Synchronous vs Asynchronous.png]]

**Syschronous blocking**
- Với syschronous blocking, nhiệm vụ hoặc hoạt động được thực hiện tuần tự. Khi một nhiệm vụ được khởi đầu, nó chặn (blocking) việc thực thi của luồng gọi cho đến khi nó hoàn thành.
- Syschronous blocking trong kiến trúc microservices là một mô hình giao tiếp trong đó các microservices giao tiếp một cách đồng bộ và chặn (blocking) luồng gọi cho đến khi một microservice hoàn thành một yêu cầu hoặc công việc cụ thể.

**Asynchronous nonblocking**
- Với asynchronous nonblocking, các nhiệm vụ hoặc hoạt động có thể được thực hiện đồng thời mà không chặn (blocking) luồng gọi. Điều này cho phép nhiều nhiệm vụ khởi đầu và chạy song song.
- Trong kiến trúc microservices, asynchronous nonblocking đề cập đến một mô hình giao tiếp trong đó một microservice gửi yêu cầu tới một dịch vụ con khác và đợi cho đến khi nhận được phản hồi trước khi tiếp tục thực hiện công việc của mình.

Tóm lại, sự lựa chọn asyschronous blockingvà asynchronous nonblocking phụ thuộc vào yêu cầu cụ thể của ứng dụng microservices. Mỗi mô hình đang có những ưu điểm và nhược điểm khác nhau. Thông thường các dự án lớn sẽ sử dụng cả hai mô hình tùy vào tình huống và yêu cầu giữa các microservices.
##### c. Request-response, Event-driven và Common data

![[Request-response, Event-driven and Common data.png]]

**Request-response**
Mô hình request-response (yêu cầu-phản hồi) là một mô hình giao tiếp (communicate pattern) trong đó một microservice (client) gửi yêu cầu (request) tới một microservice khác (server) và mong đợi một phản hồi (response) trong quá trình trả lời. Mô hình này được sử dụng rộng rãi cho các tương tác giữa các microservices và có thể triển khai bằng cách sử dụng các giao thức và công nghệ khác nhau.

**Event-Driven**
Mô hình Event-Driven là một mô hình giao tiếp trong đó một microservice trao đổi thông tin bằng cách gửi và nhận những sự kiện (event). Không giống như mô hình Resquest-Respone có thể hoạt động với cả asynchronous nonblocking và synchronous blocking. Mô hình chỉ hoạt động với asynchronous nonblocking và dựa vào các asynchorouos message để tương tác lẫn nhau. 

**Common data**
Mô hình Common data (hoặc Mô hình Dữ liệu Chung) đề cập đến một mô hình thiết kế trong đó các microservices chia sẻ một cấu trúc hoặc mô hình dữ liệu được chuẩn hóa và được định nghĩa rõ ràng. Mô hình này nhằm thiết lập một ngôn ngữ chung cho việc trao đổi dữ liệu, giúp các các microservices hiểu và làm việc với dữ liệu dễ dàng hơn.

##### d. Một số giao thức phổ biến để giao tiếp giữa các microservices
Có nhiều giao thức phổ biến được sử dụng để giao tiếp giữa các microservices trong kiến trúc phân tán.Dưới đây là một số giao thức thường được sử dụng:

- **REST over HTTP** Giao thức HTTP (Hypertext Transfer Protocol) và phiên bản bảo mật của nó, HTTPS, là giao thức rất phổ biến để giao tiếp giữa các microservices thông qua RESTful APIs. RESTful APIs sử dụng các phương thức như GET, POST, PUT và DELETE để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên tài nguyên.
- **gRPC:** gRPC là một giao thức RPC (Remote Procedure Call) phát triển bởi Google. Nó sử dụng Protocol Buffers (protobuf) để định nghĩa các dịch vụ và dữ liệu, và cho phép các microservices gọi các phương thức từ xa trực tiếp như nói chuyện với các hàm cục bộ. gRPC hỗ trợ nhiều ngôn ngữ lập trình và có hiệu suất tốt.
- **Message Queues:** Các hệ thống hàng đợi thông điệp như Apache Kafka, RabbitMQ, và Apache ActiveMQ thường được sử dụng để gửi và nhận thông điệp giữa các microservices. Điều này cho phép giao tiếp bất đồng bộ và xử lý sự kiện dựa trên thông điệp.

Một lần nữa, việc lựa chọn giao thức phụ thuộc vào các yêu cầu cụ thể của ứng dụng, hiệu suất, độ tin cậy, và kiến trúc tổng thể của hệ thống. Thường thì, một hệ thống microservices sẽ sử dụng nhiều giao thức khác nhau tùy theo tình huống và mục đích giao tiếp. Trong đề tài này, để đơn giảm thiểu độ phức tạp và làm tinh gọn dự án. Mô hình giao tiếp được sử dụng chủ yếu sẽ là Restfull API (synchronous blocking) và mô hình Common data ở một số dịch vụ đặc thù.
#### 1.1.5 Triển khai ứng dụng Microservices
Việc triển khai (deploy) một ứng dụng Microservices khác hoàn toàn với việc triển khai một ứng dụng monolithic, thông thường bạn chỉ cần một máy chủ vật lý, hoặc một máy ảo chạy hệ điều hành (linux hoặc windows server) có cài đặt môi trường là hoàn toàn có thể triển khai ứng dụng monolithic.

Điều này với ứng dụng microservices sẽ phức tạp hơn một chút. Vì mỗi microservice là độc lập với nhau nên chúng có thể hoàn toàn triển khai trên những máy chủ riêng biệt. Việc triển khai riêng biệt cũng đảm bảo nguyên tắc trong thiết kế microservices, mang lại một số lợi ích và khả năng chịu lỗi cho hệ thống. Những microservice này sẽ giao tiếp với nhau thông qua một hệ thống mạng (có thể là hệ thống mạng ảo) bằng những giao thức được định nghĩa sẵn (thường là RESTful HTTP hoặc gRPC). Vậy nên việc cấu hình hệ thống mạng giữ các microservices cũng trở thành một bài toán khá phức tạp. Cuối cùng, để đảm bảo những hệ thống này có thể tách biệt về trạng thái (state) và dữ liệu (data), đặc biệt là trong việc phát triển những ứng dụng stateful, hệ thống cơ sở dữ liệu (database) cũng trở nên phức tạp.

![[Ways to deploy microservices.png]]

Để việc triển khai ứng dụng microservices trở nên dễ dàng hơn. Những công nghệ về containrization (container-hóa) dựa trên Docker-container, ứng dụng quản lý container như Kubernets (K8s) được ứng dụng và phát triển mạnh mẽ trong những năm gần đây. Những công nghệ này được những nhà cung cấp dịch vụ điện toán đám mây (cloud provider) tích hợp mạnh mẽ vào những dịch vụ của họ, biến môi trường điện toán đám mây trở thành một trong những môi trường phù hợp nhất để triển khai một ứng dụng microservices.

Một dự án microservice vẫn có thể triển khai trên hệ thống máy chủ vật lý (server-cluster), hệ thống máy ảo (vm-cluster). Nhưng cách tối ưu hóa nhất để triển khai một hệ thống microservices vẫn là trên môi trường điện toán đám mây sử dụng một số dịch vụ như: Amazon Elastic Kubernetes Service (EKS), Google Kubernetes Engine (GKE) hoặc có thể sử dụng một số Function as a Service (FaaS) hoặc Platform as a Service (PaaS).
## 1.2 Lý thuyết về điện toán đám mây
#### 1.2.1 Điện toán đám mây là gì?
Điện toán đám mây (cloud computing hoặc ngắn gọn là cloud) là một mô hình công nghệ cho phép truy cập và sử dụng các tài nguyên máy tính (bao gồm máy chủ, lưu trữ dữ liệu, mạng, ứng dụng và dịch vụ) thông qua internet hoặc mạng riêng ảo (VPN). Thay vì phải xây dựng và quản lý hệ thống máy chủ và cơ sở hạ tầng IT trong doanh nghiệp riêng, người dùng có thể thuê hoặc sử dụng các tài nguyên này từ các nhà cung cấp dịch vụ đám mây.
![[Cloud Computing Architecture.png]]

Các ứng dụng và dịch vụ điện toán đám mây có thể được cung cấp theo mô hình trả tiền theo sử dụng (pay-as-you-go) hoặc theo mô hình đăng ký, giúp doanh nghiệp tiết kiệm thời gian, nguồn lực và chi phí so với việc tự xây dựng và duy trì hạ tầng truyền thống. Điều này cũng giúp họ tập trung hơn vào việc phát triển ứng dụng và cải thiện dịch vụ cho khách hàng thay vì lo lắng về việc quản lý hệ thống.

Các ví dụ phổ biến của các nhà cung cấp điện toán đám mây bao gồm Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), IBM Cloud và nhiều nhà cung cấp khác. Các dịch vụ điện toán đám mây có thể được sử dụng cho nhiều mục đích khác nhau, từ lưu trữ dữ liệu và phân tích dữ liệu đến triển khai ứng dụng web và ứng dụng di động, cũng như phát triển và kiểm tra phần mềm.
#### 1.2.2 Một số khái niệm cơ bản về điện toán đám mây

##### a. Ảo hóa
Ảo hóa (Virtualization) là một công nghệ trừu tượng hóa và ảo hóa phần cứng và tài nguyên vật lý, cho phép nhiều phiên bản hoặc máy ảo (Virtual Machine) chạy trên một máy chủ vật lý duy nhất. Quá trình này giúp tận dụng tài nguyên máy tính một cách hiệu quả bằng cách tạo ra các môi trường cách ly, tự đủ nơi hệ điều hành, ứng dụng và dữ liệu có thể hoạt động độc lập. Ảo hóa đóng vai trò quan trọng trong cơ sở hạ tầng công nghệ thông tin hiện đại, cung cấp tính linh hoạt, khả năng mở rộng và tiết kiệm chi phí, vì nó đơn giản hóa quản lý tài nguyên, cho phép triển khai và gỡ bỏ máy ảo một cách nhanh chóng, cải thiện khả năng phục hồi sau sự cố, và hỗ trợ việc tạo ra môi trường phát triển và kiểm tra riêng biệt khỏi hệ thống sản xuất.

![[Virtualization.png]]

Virtualization đóng một vai trò quan trọng trong điện toán đám mây bởi nó là một trong những yếu tố chính giúp tạo nên tính linh hoạt, hiệu quả và khả năng mở rộng của mô hình điện toán đám mây.

Đầu tiên, virtualization cho phép tối ưu hóa sử dụng tài nguyên máy tính trong các trung tâm dữ liệu đám mây (data center). Nhờ công nghệ này, nhiều máy ảo (VMs) có thể chia sẻ cùng một máy chủ vật lý, giúp tiết kiệm không gian và điện năng, và đồng thời cung cấp khả năng mở rộng linh hoạt theo nhu cầu.

Thứ hai, ảo hóa cung cấp sự cô lập an toàn giữa các VMs. Điều này đảm bảo rằng sự cố xảy ra trong một VM không ảnh hưởng đến các VM khác, giúp đảm bảo tính ổn định và bảo mật của các ứng dụng và dịch vụ trng môi trường đám mây.

Cuối cùng, virtualization cho phép mở rộng tài nguyên máy tính khi cần thiết để đáp ứng nhu cầu của ứng dụng. Điều này đảm bảo rằng hệ thống có khả năng mở rộng linh hoạt để xử lý tải lưu lượng biến đổi.

Tóm lại, ảo hóa là một trụ cột trong việc xây dựng và quản lý môi trường điện toán đám mây, đóng góp quan trọng vào tính linh hoạt, an toàn và hiệu quả của hạ tầng đám mây.
##### b. Mô hình dịch vụ
Các chức năng của điện toán đám mây thường được cung cấp đến với người dùng thông qua những dịch vụ (services) khác nhau. Mỗi một dịch lại cung cấp một số những tính năng khác nhau phừ hợp với một số như cầu đặc thù. Về có bản, có ba mô hình dịch vụ (service models) chính trong mô hình điện toán đám mây, đó là:

![[Cloud service models.png]]

1. **Infrastructure as a Service (IaaS)**:
   - **Định nghĩa**: IaaS cung cấp tài nguyên hạ tầng máy tính như máy chủ ảo, lưu trữ, mạng và các tài nguyên liên quan dưới dạng dịch vụ đám mây.
   - **Vai trò**: IaaS cho phép người dùng thuê và quản lý các tài nguyên máy tính mà họ cần. Họ có toàn quyền kiểm soát hệ điều hành, ứng dụng và dữ liệu trên tài nguyên này.
   - **Ứng dụng**: IaaS thường được sử dụng cho việc xây dựng và quản lý các máy chủ ảo, hệ thống lưu trữ, mạng ảo, và các tài nguyên khác mà người dùng tự quản lý.

2. **Platform as a Service (PaaS)**:
   - **Định nghĩa**: PaaS cung cấp môi trường phát triển và triển khai ứng dụng, bao gồm cơ sở hạ tầng và các dịch vụ liên quan như cơ sở dữ liệu và dịch vụ xác thực.
   - **Vai trò**: PaaS tập trung vào việc phát triển ứng dụng, giảm bớt quyết định liên quan đến cơ sở hạ tầng và quản lý. Người dùng chỉ quan tâm đến mã nguồn và ứng dụng của họ, không cần quản lý hạ tầng.
   - **Ứng dụng**: PaaS thường được sử dụng cho việc phát triển, kiểm tra và triển khai ứng dụng web và di động. Nó giúp tăng tốc quá trình phát triển và triển khai ứng dụng.

3. **Software as a Service (SaaS)**:
   - **Định nghĩa**: SaaS cung cấp ứng dụng và dịch vụ sử dụng qua internet. Người dùng không cần cài đặt hoặc quản lý phần mềm trên máy tính của họ.
   - **Vai trò**: SaaS giúp người dùng truy cập và sử dụng ứng dụng và dịch vụ mà không phải lo lắng về việc quản lý cơ sở hạ tầng hoặc bảo trì phần mềm.
   - **Ứng dụng**: SaaS rất đa dạng và có thể bao gồm nhiều loại ứng dụng, từ email và hệ thống quản lý mối quan hệ khách hàng (CRM) đến ứng dụng văn phòng trực tuyến và các ứng dụng kế toán.

![[Cloud Computing Layers.png]]

Mỗi service model trong điện toán đám mây đề cập đến mức độ quản lý tài nguyên và dịch vụ khác nhau, tùy thuộc vào nhu cầu và mục tiêu của người dùng và tổ chức. Ngoài ba mô hình dịch vụ kể trên, vẫn còn một số mô hình dịch vụ khác như Backend-as-a-Services, Database-as-a-service,... Tất cả những mô hình dịch vụ này hoàn toàn có thể cùng vận dụng trong một hệ thống microservices.
##### c. Mô hình triển khai
Có bốn mô hình triển khai (deployment models) chính trong mô hình điện toán đám mây. Các mô hình triển khai này xác định cách tài nguyên đám mây được triển khai và quản lý.

![[Deployment Models.png]]

1. **Public Cloud  (Đám mây Công cộng)**:
   - **Định nghĩa**: Đám mây công cộng là mô hình mà tài nguyên đám mây được cung cấp và quản lý bởi một nhà cung cấp đám mây và truy cập qua internet. Tài nguyên này được chia sẻ giữa nhiều khách hàng và tổ chức.
   - **Ưu điểm**: Giá thấp, dễ dàng sử dụng, không cần quản lý cơ sở hạ tầng.
   - **Sử dụng phổ biến**: Đám mây công cộng được sử dụng rộng rãi cho các ứng dụng và dịch vụ công cộng như lưu trữ dữ liệu, email, và ứng dụng web.

2. **Private Cloud (Đám mây Riêng tư)**:
   - **Định nghĩa**: Đám mây riêng tư là mô hình mà tài nguyên đám mây được triển khai và quản lý riêng biệt cho một tổ chức cụ thể hoặc một nhóm chọn lọc của tổ chức đó. Tài nguyên này thường được triển khai trên cơ sở hạ tầng riêng tư.
   - **Ưu điểm**: Kiểm soát và bảo mật tốt hơn, phù hợp cho các tổ chức có yêu cầu nghiêm ngặt về bảo mật và tuân thủ quy định.
   - **Sử dụng phổ biến**: Đám mây riêng tư thường được sử dụng trong các tổ chức lớn, chính phủ, và các ngành công nghiệp đòi hỏi sự bảo mật và kiểm soát cao.

3. **Community Cloud (Đám mây Cộng đồng)**:
   - **Định nghĩa**: Đám mây cộng đồng là mô hình mà tài nguyên đám mây được chia sẻ bởi một nhóm những tổ chức có lợi ích chung hoặc mục tiêu tương tự. Các thành viên trong cộng đồng này thường có các yêu cầu chia sẻ và bảo mật chung.
   - **Ưu điểm**: Chia sẻ chi phí và tài nguyên, cung cấp cơ hội hợp tác.
   - **Sử dụng phổ biến**: Đám mây cộng đồng thường được sử dụng trong ngành công nghiệp hoặc các tổ chức chuyên ngành như ngành y tế hoặc ngành tài chính.

4. **Cloud Hybrid (Đám mây Kết hợp)**:
   - **Định nghĩa**: Đám mây kết hợp là mô hình mà tài nguyên đám mây được triển khai trên cả hai môi trường public cloud và private cloud. Môi trường này được kết nối để cho phép di chuyển dữ liệu và ứng dụng giữa chúng.
   - **Ưu điểm**: Tính linh hoạt, cho phép tổ chức tận dụng lợi ích của cả hai mô hình đám mây và quản lý dễ dàng các ứng dụng nhạy cảm về bảo mật.
   - **Sử dụng phổ biến**: Đám mây kết hợp thường được sử dụng bởi các tổ chức có sự kết hợp giữa tài nguyên đám mây riêng tư và công cộng để tối ưu hóa hiệu suất và bảo mật.
#### 1.2.3 Lợi ích của điện toán đám mây?
Việc sử dụng những dịch vụ điện toán đám mây không còn điều gì quá xa lạ với các doanh nghiệp trong vòng 10 năm trở lại đây. Các dịch vụ đám mây mang lại nhiều lợi ích quan trọng cả đối với những doanh nghiệp vừa và nhỏ (SME) và những tập đoàn lớn. Dưới đây là những lợi ích chính của điện toán đám mây.

![[Cloud computing benefits.png]]

- **Tiết Kiệm Chi Phí**: Một trong những lợi ích lớn nhất của điện toán đám mây là khả năng tiết kiệm chi phí. Thay vì phải đầu tư lớn vào cơ sở hạ tầng máy tính riêng, người dùng có thể thuê tài nguyên đám mây theo nhu cầu. Điều này giúp tránh chi phí mua sắm và duy trì phần cứng và phần mềm Hơn nữa hầu như những nhà cung cấp dịch vụ đám mây đều cho phép sử dụng dịch vụ theo dạng Pay-as-you-go, tức là trả tiền theo thời gian sử dụng.
- **Linh Hoạt và Mở Rộng Dễ Dàng**: Đám mây cho phép linh hoạt trong việc mở rộng hoặc thu nhỏ tài nguyên máy tính dựa trên nhu cầu. Người dùng có thể điều chỉnh tài nguyên theo thời gian thực để đối phó với tải công việc biến đổi, giúp đảm bảo hiệu suất ổn định và tránh tình trạng tràn tải.
- **Truy Cập Từ Bất Kỳ Đâu**: Điện toán đám mây cho phép truy cập dữ liệu và ứng dụng từ bất kỳ đâu, miễn là có kết nối internet. Điều này tạo điều kiện thuận lợi cho làm việc từ xa, kết nối đa chi nhánh và hợp tác đa địa điểm.
- **Bảo Mật và Sao Lưu Tự Động**: Các nhà cung cấp đám mây thường cung cấp các tiêu chuẩn bảo mật cao cấp và quy trình sao lưu tự động để đảm bảo an toàn dữ liệu. Điều này giúp bảo vệ thông tin quan trọng của người dùng khỏi mất mát và tấn công mạng.
- **Tự Động Hóa và Quản Lý Dễ Dàng**: Các dịch vụ đám mây thường đi kèm với tích hợp tự động và quản lý dễ dàng. Người dùng có thể triển khai, quản lý và cấu hình tài nguyên bằng cách sử dụng giao diện đồ họa hoặc dòng lệnh, giúp đơn giản hóa quản lý hạ tầng.

Những lợi ích này biến điện toán đám mây thành một lựa chọn hấp dẫn cho cá nhân, tổ chức và doanh nghiệp để tối ưu hóa sử dụng tài nguyên, cải thiện hiệu suất và tiết kiệm chi phí.
#### 1.2.4 Tổng quan về Google Cloud Platform
Google Cloud Platform (GCP) là một dịch vụ điện toán đám mây được cung cấp bởi Google. Đây là một trong những nhà cung cấp dịch vụ điện toán đám mây hàng đầu trên thế giới, cung cấp một loạt các dịch vụ và sản phẩm liên quan đến điện toán đám mây, lưu trữ, xử lý dữ liệu, trí tuệ nhân tạo, mạng, IoT (Internet of Things), phân tích dữ liệu, và nhiều dịch vụ khác.

![[Google Cloud Platform.png]]

Lựa chọn giữa một số nhà cung cấp dịch vụ điện toán đám mây như Google Cloud Platform (GCP), Amazon Web Services (AWS) và Microsoft Azure phụ thuộc vào nhu cầu và yêu cầu cụ thể của dự án hoặc tổ chức. Điều quan trọng là tiến hành nghiên cứu cẩn thận và thử nghiệm để xác định nền tảng nào phù hợp nhất với mục tiêu và nguồn lực của tổ chức. Google Cloud Platform (GCP) là dịch vụ được tập trung trong đề tài này.
#### 1.2.5 Một số dịch vụ phổ biến của Google Cloud Platform
Google Cloud Platform có rất nhiều dịch khác nhau liên quan đến những lĩnh vực khác nhau. Các dịch vụ chính của Google Cloud Platform có thể đến bao gồm:

![[Google Cloud Services.png]]

- **Compute Engine**: là một phần của Google Cloud Platform (GCP), là một dịch vụ điện toán đám mây cho phép người dùng tạo và quản lý máy ảo (VM) trên cơ sở hạ tầng mạnh mẽ của Google. Nó cung cấp tính linh hoạt về khả năng mở rộng, cho phép người dùng điều chỉnh kích thước VM hoặc tạo các phiên bản mới nhanh chóng để đáp ứng tải làm việc biến đổi. Compute Engine cung cấp nhiều tùy chọn về mạng và bảo mật, bao gồm Mạng riêng ảo (VPC) để tạo mạng riêng, kiểm soát truy cập mạnh mẽ thông qua Quản lý danh tính và Truy cập qua Internet (IAM), và mã hóa dữ liệu trong quá trình truyền và lưu trữ. Với mô hình giá cả linh hoạt và tích hợp dễ dàng với các dịch vụ khác trong GCP, Compute Engine giúp người dùng xây dựng, triển khai và quản lý ứng dụng và dịch vụ phức tạp trong hệ sinh thái đám mây mở rộng của Google.

- **App Engine**: là một dịch vụ điện toán đám mây của Google Cloud Platform (GCP) cho phép người dùng xây dựng và triển khai ứng dụng web và ứng dụng di động một cách dễ dàng và hiệu quả. Với App Engine, người dùng có thể tập trung vào việc phát triển mã nguồn của ứng dụng mà không cần quan tâm đến quản lý hạ tầng cơ sở hạ tầng, tự động mở rộng để đáp ứng tải và có thể dễ dàng tích hợp với các dịch vụ và công cụ khác trong hệ sinh thái của GCP. Điều này giúp giảm thời gian và công sức cần thiết để triển khai và quản lý ứng dụng, đồng thời tăng khả năng mở rộng và sẵn sàng cho ứng dụng để đáp ứng nhu cầu người dùng.

- **Cloud Run**: là một dịch vụ quản lý điện toán đám mây của Google Cloud Platform (GCP) cho phép người dùng triển khai và chạy các ứng dụng container một cách dễ dàng và linh hoạt. Đặc biệt, Cloud Run chạy các ứng dụng trong môi trường serverless, giúp giảm tải công việc quản lý hạ tầng. Người dùng có thể triển khai ứng dụng từ container Docker của họ lên Cloud Run và dựa vào số lượng yêu cầu thực tế để tự động mở rộng hoặc thu hẹp khả năng chạy của ứng dụng. Điều này giúp tiết kiệm thời gian và tài nguyên, đồng thời đảm bảo hiệu suất và sẵn sàng cao cho các ứng dụng web và dịch vụ của họ trên nền tảng điện toán đám mây của Google.

- **Firebase**: là một nền tảng phát triển ứng dụng di động và website do Google cung cấp, giúp nhà phát triển xây dựng các ứng dụng mạnh mẽ và đáng tin cậy một cách nhanh chóng. Firebase bao gồm nhiều dịch vụ như cơ sở dữ liệu thời gian thực (Realtime Database), lưu trữ đám mây (Cloud Storage), xác thực người dùng, phân tích ứng dụng, thông báo đám mây, và nhiều dịch vụ khác. Một trong những điểm mạnh của Firebase là tích hợp dễ dàng với ứng dụng di động thông qua SDK cho Android và iOS, cung cấp khả năng xây dựng các tính năng như đăng nhập bằng xác thực xã hội, quản lý người dùng, và quản lý nội dung một cách hiệu quả. Firebase giúp giảm thời gian và công sức cần thiết để phát triển và triển khai ứng dụng, đồng thời cung cấp các công cụ và tài nguyên để theo dõi và cải thiện trải nghiệm người dùng.

- **Kubernetes Engine**: là một dịch vụ điện toán đám mây do Google Cloud Platform (GCP) cung cấp, được thiết kế để quản lý và triển khai các container một cách hiệu quả sử dụng Kubernetes, một hệ thống mã nguồn mở phổ biến cho việc quản lý container. Kubernetes Engine cung cấp một môi trường ổn định và mạnh mẽ để triển khai, quản lý và mở rộng các ứng dụng dựa trên container trên hạ tầng điện toán đám mây của Google. Dịch vụ này giúp giảm thiểu công việc quản lý hạ tầng, tối ưu hóa việc sử dụng tài nguyên, và đảm bảo ứng dụng luôn sẵn sàng và có khả năng mở rộng để đáp ứng nhu cầu thay đổi của người dùng. Kubernetes Engine cung cấp tích hợp chặt chẽ với các dịch vụ khác của GCP, đồng thời hỗ trợ việc triển khai ứng dụng với sự tin cậy và hiệu quả.

- **Cloud Functions**: là một dịch vụ điện toán đám mây được cung cấp bởi Google Cloud Platform (GCP), cho phép bạn viết, triển khai, và quản lý các hàm ngắn gọn (hàm không đồng bộ) mà không cần phải quản lý hạ tầng hoặc máy chủ. Cloud Functions được thiết kế để xử lý sự kích hoạt từ các sự kiện trong hệ sinh thái GCP hoặc từ các nguồn bên ngoài như HTTP requests, thay đổi trạng thái cơ sở dữ liệu, hoặc thông báo đám mây. Điều này giúp bạn xây dựng các ứng dụng linh hoạt và phản hồi nhanh với khả năng tự động mở rộng dựa trên nhu cầu. Cloud Functions hỗ trợ nhiều ngôn ngữ lập trình như Node.js, Python, Go, và nhiều ngôn ngữ khác, giúp bạn phát triển các logic ứng dụng một cách dễ dàng và nhanh chóng mà không cần lo lắng về quản lý cơ sở hạ tầng.

- **Cloud Storage**: là một dịch vụ lưu trữ đám mây được cung cấp bởi Google Cloud Platform (GCP). Dịch vụ này cho phép người dùng lưu trữ và quản lý dữ liệu trực tuyến một cách an toàn và linh hoạt trên cơ sở hạ tầng điện toán đám mây của Google. Cloud Storage được thiết kế để lưu trữ dữ liệu từ các nguồn khác nhau, bao gồm hình ảnh, video, tệp tin, dữ liệu lớn, và cơ sở dữ liệu dạng đối tượng. Điểm mạnh của dịch vụ này bao gồm khả năng mở rộng linh hoạt, bảo mật mạnh mẽ (bao gồm mã hóa dữ liệu trong lưu trữ và truyền tải), tích hợp tốt với các dịch vụ GCP khác như BigQuery và App Engine, cùng với khả năng quản lý quyền truy cập đối tượng dựa trên các chính sách an toàn. Cloud Storage là một công cụ quan trọng cho việc lưu trữ và phân phối nội dung trực tuyến, sao lưu dự phòng dữ liệu, và xử lý dữ liệu lớn.

- **Cloud SQL**: là một dịch vụ cơ sở dữ liệu quản lý được cung cấp bởi Google Cloud Platform (GCP). Dịch vụ này cho phép bạn triển khai, quản lý và vận hành các hệ quản trị cơ sở dữ liệu (DBMS) phổ biến như MySQL, PostgreSQL, và SQL Server trên cơ sở hạ tầng điện toán đám mây của Google. Cloud SQL giúp đơn giản hóa việc quản lý cơ sở dữ liệu bằng cách cung cấp các tính năng như tự động sao lưu, tự động mở rộng, bảo mật mạnh mẽ và khả năng định thời thực hiện các tác vụ dữ liệu quan trọng. Dịch vụ này còn tích hợp tốt với các dịch vụ khác của GCP như Compute Engine, Kubernetes Engine và App Engine, giúp bạn xây dựng và triển khai các ứng dụng và dịch vụ dựa trên dữ liệu một cách hiệu quả và đáng tin cậy. Cloud SQL là một lựa chọn tốt cho các ứng dụng yêu cầu cơ sở dữ liệu quan hệ và đòi hỏi tính sẵn sàng và khả năng mở rộng.

Một số dịch vụ đặc thù khác của Google Cloud Platform có thể kể đến như là
- **Machine Learning Engine**: Cung cấp khả năng triển khai mô hình học máy và trí tuệ nhân tạo.
- **Cloud Networking**: Cung cấp các dịch vụ mạng và kết nối đám mây.
- **Cloud IoT**: Dành cho Internet of Things (IoT) để kết nối và quản lý các thiết bị IoT.
- **Cloud Identity and Access Management (IAM)**: Quản lý quyền truy cập vào các tài nguyên trên GCP.

#### 1.1.6 Lựa chọn dịch vụ điện toán đám mây cho ứng dụng microservices
Lựa chọn và sử dụng các dịch vụ đám mây trong một ứng dụng micorservices đòi hỏi một quá trình xác định mục tiêu và lựa chọn công nghệ, tài nguyên một cách tỉ mỉ. 

Đầu tiên, việc xác định rõ mục tiêu là vô cùng quan trọng. Cần phải biết chính xác những gì dự án muốn đạt được từ việc sử dụng điện toán đám mây để triển khai ứng dụng microservices, đẻ có thể là tối ưu hóa chi phí, nâng cao hiệu suất, hoặc cải thiện tính bảo mật. Sau đó, tùy theo đặc thù của dự án mà lựa chọn một số dịch vụ phù hợp. 

Ví dụ 1: Một node.js server có thể triển khai trên cả Compute Engine lẫn Cloud Run nhưng với dự án thiếu tài nguyên và không yêu cầu phức tạp liên quan đến môi trường. Cloud Run sẽ là lựa chọn tối ưu và tiết kiệm tài nguyên (thời gian và chi phí) hơn.

Ví dụ 2: Việc sử dụng *Kubernetes Engine* để triển khai một ứng dụng microservices mang lại rất nhiều lợi ích nhưng đổi lại mức độ phức tạp và lượng tài nguyên yêu cầu cho dự án trở nên rất lớn. Với những ứng dụng nhỏ hoặc mới bắt đầu phát triển có thể sử dụng một số các dịch vụ serverless (như *Cloud Run, Cloud Function, Cloud SQL,...*) để thay thế.

Thêm vào đó việc triển khai ứng dụng trên môi trường điện toán đám mây, yêu cầu việc theo dõi và tối ưu hóa việc sử dụng tài nguyên đám mây cũng rất quan trọng. Sử dụng công cụ quản lý và giám sát để đảm bảo rằng ứng dụng đang sử dụng tài nguyên một cách hiệu quả và thường xuyên kiểm tra và đánh giá để đảm bảo rằng dự án đạt được mục tiêu của mình khi sử dụng dịch vụ đám mây

## 1.3 Một số khái niệm khác

#### 1.3.1 Mô hình phát triển phần mềm scrum và aglie
So với mô hình phát triển thác nước (Waterfall model) truyền thống việc phát triển một ứng dụng microservices sẽ phù hợp với mô hình phát triển Scrum/Agile. Mỗi Scrum team có thể chịu trách nhiệm cho một, hoặc một nhóm microservices nhất định. 

![[Waterfall Model.png]]

Tuy vậy, mô hình phát triển phần mềm scrum/agile cũng không phải là toàn năng cũng có những vấn đề tùy theo những hệ thống, ứng dụng hoặc bài toán khác nhau. Vì lý do này, việc quản lý phát triển triển dự án theo mô hình ở được các công ty công nghệ lớn sẽ có những thay đổi về khác nhau để phù hợp với từng sản phẩm, hoặc văn hóa công ty. 
##### a. Agile 
Phương pháp Agile là một triết lý và phương thức phát triển phần mềm tập trung vào sự linh hoạt, tương tác liên tục với khách hàng, và khả năng thích nghi nhanh chóng với thay đổi. Agile chú trọng vào việc đáp ứng nhu cầu thay đổi của khách hàng, tối ưu hóa giá trị và chất lượng của sản phẩm phần mềm.

Dưới đây là những đặc điểm và nguyên tắc (agile manifesto) quan trọng của phương pháp Agile:
- Ưu tiên đặt sự tương tác với khách hàng
- Ưu tiên đặt phản hồi và thay đổi
- Tự quản lý và tự tổ chức
- Phát triển từng phần nhỏ (Incremental and Iterative)
- Tập trung vào giá trị cho khách hàng
- Kiểm thử và phát triển song song
- Sử dụng quy trình và công cụ phù hợp

Có nhiều phương pháp Agile khác nhau như Scrum, Kanban, Extreme Programming (XP), và nhiều phương thức khác. Mục tiêu cuối cùng của Agile là đảm bảo rằng phát triển phần mềm là một quá trình linh hoạt, hiệu quả và đáp ứng được nhu cầu thay đổi của khách hàng.
##### b. Scrum
Scrum là một phương pháp quản lý dự án và phát triển phần mềm dựa trên triết lý Agile. Nó giúp các tổ chức tạo ra các sản phẩm phần mềm chất lượng cao và thích nghi nhanh chóng với thay đổi trong môi trường kinh doanh. Dưới đây là một tổng quan về Scrum:

**Mục tiêu của mô hình Scrum là:**
- **Phản hồi nhanh:** Scrum tập trung vào việc cung cấp sản phẩm phần mềm ở chất lượng tốt và có giá trị cho khách hàng sớm nhất có thể.
- **Tính linh hoạt:** Scrum cho phép phản hồi và thay đổi dự án dễ dàng để đảm bảo rằng sản phẩm đáp ứng được nhu cầu thay đổi của khách hàng.
- **Tính tự quản lý:** Nhóm Scrum được khuyến khích tự quản lý và tự tổ chức để đảm bảo hiệu suất và hiệu quả cao nhất.

![[Scrum Process.png]]

Trong một dự án Scrum, có ba thành phần chính đó là Nhóm Scrum, Product Owner, và Scrum Master. Nhóm Scrum (scrum team) bao gồm các thành viên chuyên môn với các vai trò khác nhau, và họ tự quản lý và tự tổ chức để phát triển sản phẩm. Product Owner là người đại diện cho khách hàng, xác định yêu cầu và ưu tiên tính năng. Scrum Master là người hỗ trợ nhóm Scrum trong việc áp dụng Scrum và loại bỏ các rào cản, đảm bảo rằng quy trình diễn ra một cách hiệu quả.

**Các sự kiện (Events) trong Scrum:**
- **Sprint:** Là một khoảng thời gian cố định, thường từ 2 đến 4 tuần, trong đó nhóm Scrum phát triển một phần của sản phẩm. Sprint giới hạn công việc trong khoảng thời gian này và tạo điều kiện để tạo ra sản phẩm có giá trị.
- **Sprint Planning:** Là cuộc họp ở đầu mỗi Sprint để xác định và cam kết với các công việc cần thực hiện trong Sprint tới.
- **Daily Scrum (Scrum Daily Standup):** Là cuộc họp hàng ngày để cập nhật tiến trình công việc, thảo luận về các vấn đề, và tạo kế hoạch cho ngày làm việc tiếp theo.
- **Sprint Review:** Là cuộc họp ở cuối mỗi Sprint để kiểm tra và đánh giá sản phẩm đã hoàn thành trong Sprint vừa qua.
- **Sprint Retrospective:** Là cuộc họp sau Sprint để đánh giá quy trình làm việc của nhóm Scrum và xác định cách để cải thiện.

Trong quy trình Scrum, Product Backlog đóng vai trò quan trọng bằng cách định nghĩa tất cả yêu cầu và công việc cần phát triển. Product Owner quản lý và ưu tiên các mục trong Product Backlog dựa trên giá trị cho khách hàng, đảm bảo rằng các tính năng quan trọng nhất được phát triển trước.

Scrum giúp tăng sự linh hoạt và khả năng thích nghi trong quá trình phát triển phần mềm bằng cách tạo ra các chu kỳ phát triển ngắn gọn và thường xuyên. Điều này giúp đảm bảo rằng sản phẩm luôn được cập nhật và phản ánh nhu cầu thực tế của khách hàng.
#### 1.3.2 Tổng quan về CI/CD
CI/CD là viết tắt của Tích hợp liên tục - Continuous Integration (CI) và Triển khai liên tục - Continuous Deployment (CD), là một phần quan trọng trong quy trình phát triển phần mềm và triển khai ứng dụng, đặc biệt là với ứng dụng microservices. Các công cụ CI/CD phổ biến như Jenkins, Travis CI và GitLab CI/CD giúp tự động hóa việc tích hợp và triển khai phần mềm để tạo ra quá trình phát triển linh hoạt và hiệu quả hơn.

![[CI-CD pineline 1.png]]

**Continuous Integration (CI)** là một phần của quy trình phát triển phần mềm, trong đó các nhà phát triển đồng bộ hóa và tích hợp mã nguồn của họ vào một kho lưu trữ chung một cách thường xuyên, thường hàng ngày hoặc thậm chí là sau mỗi lần thay đổi mã. Mục tiêu của CI là kiểm tra và đảm bảo rằng mã mới tích hợp không gây ra lỗi hoặc xung đột với các phần khác của mã nguồn.

**Continuous Deployment (CD)** là giai đoạn tiếp theo sau CI, trong đó ứng dụng được tự động triển khai vào môi trường sản xuất sau khi qua các bước kiểm tra và xác nhận trong môi trường thử nghiệm và/hoặc staging. Mục tiêu của CD là đảm bảo rằng phần mềm luôn sẵn sàng cho việc triển khai, và bất kỳ thay đổi mới nào cũng có thể được đưa vào sản xuất một cách tự động và an toàn.

![[CI-CD pipeline of monolith and microservices 1.png]]

Trong phát triển ứng dụng microservices kết hợp với mô hình scrum, mỗi một nhóm (scrum team) chịu trách nhiệm với một hoặc một nhóm microservices độc lập. Mỗi microservices này thường có các quy trình CI/CD tách biệt điều này giúp giảm thời gian và công sức cần thiết để triển khai ứng dụng, đảm bảo tính ổn định của sản phẩm phần mềm và cung cấp khả năng cập nhật nhanh chóng và linh hoạt, giúp đáp ứng nhanh các yêu cầu thay đổi của khách hàng và môi trường kinh doanh.
#### 1.3.3 Tổng quan về SSG, SSR, CSR và ISR
##### a. Static-side generation
Static-site generation (SSG) là một kỹ thuật phát triển website tạo ra các trang web từ trước trong quá trình build (pre-render) và trả về chúng dưới dạng các tệp static cho người dùng (client), thay vì tạo ra (render) các trang web trên server (Server-site Rendering) khi người dùng yêu cầu. Phương pháp này mang lại hiệu suất tốt, thời gian tải nhanh, lợi ích về bảo mật và sự dễ dàng trong triển khai.

![[Static-side generation.png]]

Một số static-site generators (SSGs)phổ biến bao gồm Gatsby, Next.js, Hugo, Jekyll, and Nuxt.js. Những SSGs này cung cấp nhiều chức năng cho một trang web như routing, templating, và data fetching.

Ngoài ra, static-side generation có thể kết hợp với một số serverless function (Google Cloud Function hoặc Vercel Serverless Functions) để xử lý các chức năng động hoặc tương tác phía máy chủ. Trong khi nội dung chính vẫn là tĩnh, các chức năng này có thể được kích hoạt để thực hiện các nhiệm vụ cụ thể khi cần thiết, chẳng hạn như việc gửi biểu mẫu hoặc xác thực người dùng.

Static-site generation thích hợp cho nhiều loại trang web, bao gồm blog, trang tài liệu, trang tiếp thị và thậm chí một số ứng dụng web. Nó đơn giản hóa quá trình phát triển, cải thiện hiệu suất và tăng cường bảo mật. Tuy nhiên, nó có thể không phù hợp cho các trang web với nội dung cực kỳ động cần cập nhật theo thời gian thực hoặc xử lý phía máy chủ phức tạp. Trong trường hợp đó, phương pháp tiếp cận phía máy chủ truyền thống (SSR) là phù hợp hơn.
##### b. Server-side Rendering
Server-side rendering (SSR) là một kỹ thuật phát triển website được sử dụng để cải thiện hiệu suất và tối ưu hóa SEO (tối ưu hóa công cụ tìm kiếm) của các ứng dụng web bằng cách xử lý (render) trang web trên máy chủ khi người dùng (client) gửi yêu cầu và phản hồi bằng nội dung hoàn chỉnh. Điều này khác biệt so với client-side rendering (CSR), nơi trình duyệt ban đầu nhận nội dung tối thiểu và sau đó dựa vào JavaScript để hiển thị và điền dữ liệu vào trang.

![[Server-side Rendering.png]]

Server-side rendering cũng mang lại lợi ích về SEO, thời gian tải trang ban đầu nhanh và khả năng truy cập tốt. Thông qua việc xác thực người dùng (authentication) và cookie, SSR có thể tạo ra những website cá nhân hóa, làm tăng trải nghiệm người dùng. Tuy nhiên, SSR đi kèm với những thách thức, bao gồm tiêu hao nhiều tài nguyên máy chủ do phải xử lý (render) trang web trực tiếp trên máy chủ, phức tạp hơn SSG. Cấu hình lưu trữ (cache) và định tuyến (routing) đúng cách khá tốn công sức, và việc sửa lỗi có thể phức tạp hơn. 

Các frameworks phổ biến sử dụng Javascript để phát triển website là Next.js (cho React), Nuxt.js (cho Vue.js) và Angular Universal (cho Angular) cung cấp khả năng SSR, giúp nhà phát triển (developer) dễ dàng thực hiện render phía máy chủ trong ứng dụng của họ. Các frameworks này xử lý nhiều khía cạnh phức tạp liên quan đến SSR việc phát triển website trở nên dễ dàng hơn
##### c. Client-side Rendering
Client-side rendering (CSR) là một kỹ thuật phát triển web, trong đó trang web được xử lý (render) ban đầu trên trình duyệt của người dùng (client) bằng JavaScript, thay vì được xử lý (render) trước trên máy chủ (server). Trong CSR, ứng dụng web tải một cấu trúc HTML tối giản, sau đó sử dụng JavaScript để truy xuất dữ liệu từ máy chủ (thường thông qua các API) và động hiển thị và cập nhật nội dung trên trang. Phương pháp này thường được sử dụng trong các ứng dụng trang đơn (single-page applications - SPAs) và các ứng dụng web hiện đại khác.

![[Client-side Rendering.png]]

Client-side rendering là một phương pháp mạnh mẽ để tạo ra các ứng dụng web tương tác hiện đại, nhưng nó những vấn vấn đề liên quan tới SEO, thời gian tải trang ban đầu và tối ưu hóa hiệu suất. Sự lựa chọn giữa client-side rendering và server-side rendering (SSR) thường phụ thuộc vào các yêu cầu cụ thể và ràng buộc của dự án. Một số dự án có thể kết hợp cả hai kỹ thuật để cân nhắc lợi ích của mỗi phương pháp.
##### d. Incremental Static Regeneration
Incremental Static Regeneration (ISR) là một kỹ thuật được sử dụng trong các framework tạo trang tĩnh (static-site generation - SSG) để cập nhật và xây dựng lại các trang cụ thể trên một trang web tĩnh mà không cần phải tạo lại toàn bộ trang web. Nó nhằm tạo sự cân bằng giữa lợi ích của việc tạo trang tĩnh, như thời gian tải nhanh và lợi ích về SEO, và khả năng xử lý nội dung động hoặc thay đổi thường xuyên.

ISR sẽ phù hợp cho trường hợp cho những trường hợp như một website có số lượng lớn (hàng chục nghìn) trang sản phẩm, những trang sản phẩm này nếu sử dụng pre-render như SSG thì lại không hợp lý, CSR thì không tối ưu hóa được SEO, SSR là lựa chọn phù hợp nhất nhưng vẫn sử dụng nhiều tài nguyên. IRS một lựa chọn tối ưu trong trường hợp này.

![[Incremental Static Regeneration.png]]

Cách thường thức hoạt động của Incremental Static Regeneration (ISR):
1. **Tạo trang tĩnh ban đầu**: Như trong truyền thống tạo trang tĩnh (static site generation - SSG), trang web ban đầu được tạo ra, tạo ra các tệp HTML tĩnh cho mỗi trang dựa trên dữ liệu có sẵn vào thời điểm xây dựng.
2. **Tự Động Cập Nhật**: Với ISR, bạn có thể định thời gian hoặc khoảng thời gian cập nhật lại (revalidation) cho từng trang. Điều này quyết định tần suất trang cần được cập nhật. Ví dụ, bạn có thể đặt một trang để cập nhật mỗi 5 phút hoặc mỗi giờ.
3. **Sử Dụng Giao Diện cũ Khi Cập Nhật**: Khi người dùng yêu cầu một trang, máy chủ cung cấp phiên bản HTML tĩnh hiện tại (phiên bản "lỗi thời") và đồng thời kích hoạt quá trình nền để cập nhật dữ liệu cho trang đó. Điều này có nghĩa là người dùng có thể truy cập thông tin hiện có ngay lập tức.
5. **Tạo Lại Theo Yêu Cầu**: Máy chủ tạo lại trang cụ thể khi có yêu cầu nếu trang đã vượt qua thời gian cập nhật lại hoặc nếu có một sự kiện kích hoạt, chẳng hạn như cuộc gọi API bên ngoài hoặc cập nhật nội dung. Sau khi tạo lại, phiên bản mới thay thế phiên bản cũ.
    
Lợi ích của Incremental Static Regeneration (ISR) cho phép cập nhật nội dung động một cách linh hoạt và tự động mà không cần phải tạo lại toàn bộ trang web tĩnh. Điều này làm cho trang web vừa nhanh vừa cung cấp thông tin mới nhất cho người dùng mà không làm tăng tải máy chủ quá nhiều. Một số framework hỗ trợ ISR là Nuxt.js và Next.js.

#### 1.3.4 Một số công nghệ khác sử dụng trong đề tài
##### a. Next.js
Next.js là một framework mã nguồn mở phát triển dự trên thư viện React.js được sử dụng để xây dựng các ứng dụng web. Next.js cung cấp một bộ công cụ và quy ước để đơn giản hóa quá trình phát triển và cải thiện hiệu suất của các ứng dụng web.

Một số tính năng nổi bật của Next.js bao gồm hỗ trợ cho server-side rendering (SSR) và static site generation (SSG) giúp cải thiện SEO và tối ưu hóa tải trang ban đầu. Nó cung cấp định tuyến tự động, cơ chế hot module replacement (HMR) cho phép việc phát triển nhanh chóng, và hỗ trợ cho việc tạo các API-endpoint dễ dàng thông qua API routes. Next.js cũng hỗ trợ CSS với nhiều định dạng khác nhau. Điều này làm cho Next.js trở thành một lựa chọn tuyệt vời cho phát triển ứng dụng web hiệu suất cao và tương tác.

Next.js đã trở nên phổ biến nhờ tính năng thân thiện với nhà phát triển, tối ưu hóa hiệu suất và tính linh hoạt trong việc xây dựng các ứng dụng web hiện đại. Đó là một framework đa dạng phù hợp với nhiều dự án phát triển web.
##### b. FastAPI
FastAPI là một framework phát triển ứng dụng web và xây dựng API (Application Programming Interface) sử dụng ngôn ngữ Python. Nó được thiết kế để tạo ra các ứng dụng web hiệu suất cao và API RESTful một cách nhanh chóng và dễ dàng. 

FastAPI nổi bật với tính Pythonic, hiệu suất cao và tự động tạo tài liệu. Với sự sử dụng của type hints và docstrings, FastAPI giúp làm cho việc viết mã nguồn dễ đọc và hiểu hơn. Nó tối ưu hóa hiệu suất thông qua việc sử dụng ASGI và Pydantic, hỗ trợ WebSockets cho ứng dụng thời gian thực, tích hợp bảo mật với xác thực và phân quyền, và cung cấp cơ chế xử lý lỗi cơ bản. FastAPI có một cộng đồng phát triển đông đảo và là lựa chọn hàng đầu cho việc xây dựng các ứng dụng và API hiệu suất cao và tương tác trong ngôn ngữ Python.
##### c. PostgreSQL
PostgreSQL viết tắt là Postgres, nó thường được sử dụng để đề cập đến hệ thống quản lý cơ sở dữ liệu (Database Management System - DBMS) mã nguồn mở. PostgreSQL là một DBMS mạnh mẽ và phổ biến được sử dụng để lưu trữ và quản lý dữ liệu trong các ứng dụng và hệ thống thông tin.

PostgreSQL có nhiều tính năng mạnh mẽ bao gồm hỗ trợ cho nhiều loại dữ liệu, hệ thống đa nhiệm, sự tuân theo các nguyên tắc ACID (Atomicity, Consistency, Isolation, Durability) để đảm bảo tính toàn vẹn và nhất quán của dữ liệu, hỗ trợ tiêu chuẩn SQL, khả năng mở rộng và tích hợp dễ dàng, bảo mật mạnh mẽ, và nhiều tính năng khác.

PostgreSQL thường được sử dụng trong nhiều loại ứng dụng và dự án, bao gồm các hệ thống quản lý nội dung, ứng dụng web, phân tích dữ liệu, và các ứng dụng doanh nghiệp. Điều này là do tính mạnh mẽ, đáng tin cậy và tích hợp dễ dàng của nó. PostgreSQL là một dự án mã nguồn mở với một cộng đồng phát triển lớn, cho phép sự phát triển và cải tiến liên tục của nó.