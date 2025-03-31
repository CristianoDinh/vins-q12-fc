import { Injectable } from '@angular/core';
import {News} from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() { }

  protected newsList: News[] = [
    {
      id: 1,
      title: "",
      subtitle: "",
      content: "",
      type: "",
      dateCreated: new Date(),
    },
    {
      id: 2,
      title: "CLB Vins Q12 \"Giang Tay\" với Paul Pogba Sau Scandal Cấm Thi Đấu",
      subtitle: "Sau lùm xùm cấm thi đấu từ FIFA, Paul Pogba đang đối mặt với tương lai bất định. Tuy nhiên, CLB Vins Q12 đã ngỏ lời chiêu mộ anh, hy vọng tạo cơ hội để ngôi sao người Pháp làm lại sự nghiệp và chứng tỏ khả năng tại môi trường bóng đá Việt Nam.",
      content: "Trong những ngày gần đây, Paul Pogba, ngôi sao nổi bật của bóng đá thế giới, đã gây chấn động khi bị FIFA cấm thi đấu do liên quan đến một vụ việc nghiêm trọng. Mặc dù tương lai của anh đang mờ mịt và bị bao vây bởi những rắc rối pháp lý, nhưng CLB Vins Q12 vẫn giữ vững quan điểm: \"Tài năng và sức hút của Pogba là không thể phủ nhận.\"\n" +
        "\n" +
        "CLB Vins Q12, với tiềm lực tài chính mạnh mẽ và tham vọng vươn tầm quốc tế, đã chính thức gửi lời mời đến Pogba. Đại diện của đội bóng này cho biết: \"Dù tình hình hiện tại có khó khăn, chúng tôi vẫn nhìn thấy cơ hội lớn từ việc chiêu mộ một ngôi sao như Pogba. Đây là cơ hội để anh ấy quay lại với đam mê bóng đá, và cùng chúng tôi xây dựng một CLB ngày càng vươn xa.\"\n" +
        "\n" +
        "Với những ồn ào từ vụ scandal, không ít người nghi ngờ về quyết định của CLB Vins Q12. Tuy nhiên, đội bóng này tin rằng, thông qua việc gia nhập, Pogba sẽ có một sân chơi lý tưởng để lấy lại phong độ, cũng như viết tiếp câu chuyện sự nghiệp của mình. Nhiều người vẫn hy vọng rằng, qua những bước đi táo bạo này, CLB Vins Q12 sẽ không chỉ làm mới đội hình mà còn góp phần đưa bóng đá Việt Nam lên tầm cao mới.\n" +
        "\n" +
        "Trong khi tương lai của Pogba vẫn còn mập mờ, câu chuyện này chắc chắn sẽ là đề tài nóng bỏng trong làng bóng đá quốc tế, nhất là khi CLB Vins Q12 quyết định mạo hiểm đầu tư vào một tài năng lớn nhưng cũng đầy rủi ro.",
      type: "others",
      dateCreated: new Date(),
    },
    {
      id: 3,
      title: "Martin Ødegaard: Câu Chuyện Của Một Tài Năng Bị Dồn Nén Dưới Áp Lực",
      subtitle: "Martin Ødegaard từng được xem là một trong những tài năng sáng giá của bóng đá thế giới, với kỹ thuật và khả năng điều khiển nhịp độ trận đấu ấn tượng. Tuy nhiên, dưới áp lực khổng lồ của việc thi đấu tại các câu lạc bộ lớn, sự nghiệp của anh lại gặp phải những bước ngoặt đầy khó khăn.",
      content: "Kể từ khi còn là một tài năng trẻ đầy hứa hẹn, Martin Ødegaard đã gây ấn tượng mạnh mẽ với những màn trình diễn xuất sắc tại các cấp độ trẻ của Na Uy, đồng thời thu hút sự chú ý của các câu lạc bộ hàng đầu châu Âu. Với kỹ thuật điêu luyện và khả năng chuyền bóng thông minh, anh được kỳ vọng sẽ là ngôi sao tiếp theo của bóng đá thế giới. Tuy nhiên, con đường sự nghiệp của Ødegaard không phải lúc nào cũng trải đầy hoa hồng.\n" +
        "\n" +
        "Sự gia nhập của Ødegaard vào Real Madrid khi còn rất trẻ là một bước đi đáng chú ý, nhưng cũng mang đến áp lực không nhỏ. Trong bối cảnh một câu lạc bộ giàu tham vọng như Real, việc duy trì phong độ và sự ổn định là điều vô cùng khó khăn. Sau những lần cho mượn tại các đội bóng khác như Heerenveen và Vitesse, Ødegaard đã dần khẳng định được mình tại Real Sociedad và sau đó là Arsenal, nơi anh đang dần lấy lại phong độ và chứng minh giá trị.\n" +
        "\n" +
        "Tuy nhiên, sự nghiệp của Ødegaard không chỉ bị ảnh hưởng bởi áp lực từ các câu lạc bộ lớn mà còn bởi những kỳ vọng quá lớn từ truyền thông và người hâm mộ. Dù đã vượt qua được một số giai đoạn khó khăn, nhưng câu hỏi về việc liệu anh có thể vươn lên trở thành một huyền thoại thực sự hay không vẫn còn là một dấu hỏi lớn.\n" +
        "\n" +
        "Bước vào giai đoạn trưởng thành, Ødegaard vẫn còn nhiều cơ hội để viết lại câu chuyện sự nghiệp của mình. Nhưng có lẽ, những áp lực mà anh phải đối mặt trong suốt hành trình của mình là điều không dễ dàng để vượt qua. Liệu Ødegaard có thể chứng minh được giá trị của mình và trở thành một ngôi sao lớn như người ta từng kỳ vọng?\n" +
        "\n",
      type: "",
      dateCreated: new Date(),
    },
    {
      id: 4,
      title: "Mes'Son: \"Không có tập thể này, sẽ không có tôi ngày hôm nay !\" ",
      subtitle: "Mes'Son - sở hữu khả năng đi bóng thiên phú nhưng lại lạm dụng ở nhiều thời điểm không hợp lý. Gia nhập Vins Q12, anh đã tìm thấy sự cân bằng và phát triển mạnh mẽ hơn bao giờ hết, nhờ vào sự hỗ trợ từ các đồng đội và ban huấn luyện.",
      content: "Mes'Son, một trong những ngôi sao bóng đá trẻ triển vọng, đã luôn nổi bật với khả năng đi bóng đầy ma thuật và sự linh hoạt tuyệt vời trên sân. Tuy nhiên, sự thiếu kiên nhẫn và việc lạm dụng kỹ thuật cá nhân ở những thời điểm không phù hợp đã khiến anh phải trải qua những thất bại đáng tiếc trong sự nghiệp. Trước khi gia nhập CLB Vins Q12, Mes'Son luôn được xem là một tài năng \"chưa thực sự được khai thác hết\" vì không thể hòa nhập với lối chơi tập thể.\n" +
        "\n" +
        "Chuyển đến Vins Q12, Mes'Son đã có cơ hội làm lại sự nghiệp của mình dưới sự chỉ dẫn của các huấn luyện viên tài ba và sự hỗ trợ từ các đồng đội giàu kinh nghiệm. “Không có tập thể này, sẽ không có tôi ngày hôm nay,” Mes'Son chia sẻ, nhấn mạnh sự quan trọng của việc làm việc cùng nhau trong bóng đá. Tại đây, anh đã học được cách phát huy sức mạnh cá nhân mà không làm ảnh hưởng đến chiến thuật chung, và cũng dần trở thành một nhân tố quan trọng trong đội hình của Vins Q12.\n" +
        "\n" +
        "Với sự hỗ trợ từ tập thể mạnh mẽ, Mes'Son đã có sự chuyển mình đáng kể, không chỉ trong lối chơi mà còn trong cách nhìn nhận về vai trò của mình trên sân cỏ. Từng bước, anh đã thể hiện sự trưởng thành, không còn chỉ là một cầu thủ đi bóng \"lố\" mà là một chiến binh thực sự, biết khi nào nên giữ bóng và khi nào phải chuyền cho đồng đội.\n" +
        "\n" +
        "Nhìn lại, sự nghiệp của Mes'Son tại Vins Q12 chính là minh chứng cho sức mạnh của sự kết hợp giữa tài năng cá nhân và sự đoàn kết trong đội bóng. Anh là hình mẫu điển hình của việc một cầu thủ có thể trưởng thành và tỏa sáng khi được hỗ trợ đúng cách.",
      type: "",
      dateCreated: new Date(),
    },
    {
      id: 5,
      title: "",
      subtitle: "",
      content: "",
      type: "",
      dateCreated: new Date(),
    },
  ]

  getAllNews() {
    return this.newsList;
  }

  listNewsByMatch() {
    return this.newsList.filter(news =>
      news.title === 'matches'
    )
  }
  listNewsByClub() {
    return this.newsList.filter(news =>
      news.title === 'club'
    )
  }
  listNewsByInterviews() {
    return this.newsList.filter(news =>
      news.title === 'interviews'
    )
  }
  listNewsByOthers() {
    return this.newsList.filter(news =>
      news.title === 'others'
    )
  }
}
