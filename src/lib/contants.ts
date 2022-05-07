import ShouldGo1 from "public/assets/shouldgo-1.png";
import ShouldGo2 from "public/assets/shouldgo-2.png";
import ShouldGo3 from "public/assets/shouldgo-3.png";
import Discount1 from "public/assets/discount-1.png";
import Discount2 from "public/assets/discount-2.png";
import Discount3 from "public/assets/discount-3.png";
import Famous1 from "public/assets/famous-1.png";
import Famous2 from "public/assets/famous-2.png";
import Famous3 from "public/assets/famous-3.png";
import Famous4 from "public/assets/famous-4.png";
import { PlanProps } from "@/store/type";

export const fadeInUp = {
  initial: {
    opacity: 0,
    translateY: 100,
    transition: {
      delay: 0.5,
    },
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const discounts = [
  {
    code: "F2469WER",
    content: "Hội An - Giảm 30% khi đi trong tuần",
    background: Discount1.src,
  },
  {
    code: "F2469WER",
    content: "Tặng 2 bữa tối miễn phí khi du lịch dưới 3 người",
    background: Discount2.src,
  },
  {
    code: "F2469WER",
    content: "Thám hiểm rừng sâu - Hỗ trợ cắm trại miễn phí",
    background: Discount3.src,
  },
  {
    code: "F2469WER",
    content: "Tặng 2 bữa tối miễn phí khi du lịch dưới 3 người",
    background: Discount2.src,
  },
];

export const famousPlaces = [
  {
    name: "Hồ Chí Minh",
    background: Famous1.src,
  },
  {
    name: "Hà Nội",
    background: Famous2.src,
  },
  {
    name: "Đà Nẵng",
    background: Famous3.src,
  },
  {
    name: "Hội An",
    background: Famous4.src,
  },
  {
    name: "Hồ Chí Minh",
    background: Famous1.src,
  },
  {
    name: "Hà Nội",
    background: Famous2.src,
  },
  {
    name: "Đà Nẵng",
    background: Famous3.src,
  },
  {
    name: "Hội An",
    background: Famous4.src,
  },
];

export const plans: PlanProps[] = [
  {
    id: 1,
    thumbnail: Famous1.src,
    name: "Hồ Chí Minh",
    from: "30/4",
    to: "4/5",
    places: [
      {
        name: "Coffee House An Dương view hướng đồi",
        thumbnail: "https://picsum.photos/500/500",
        startTime: "08:00",
        startDate: "30/4",
        members: 5,
        rating: 4.8,
        ratingCount: 1345,
        toCome: 286,
        willCome: 179,
        lat: 10.8567268,
        lng: 106.7557407,
        appliedCoupons: [
          {
            code: "F2469WER",
            content: "Hội An - Giảm 30% khi đi trong tuần",
            background: Discount1.src,
          },
          {
            code: "F2469WER",
            content: "Tặng 2 bữa tối miễn phí khi du lịch dưới 3 người",
            background: Discount2.src,
          },
        ],
      },
      {
        name: "Suối tiên Theme park",
        thumbnail: "https://picsum.photos/500/500",
        startTime: "08:00",
        startDate: "30/4",
        members: 5,
        rating: 4.8,
        ratingCount: 1345,
        toCome: 286,
        willCome: 179,
        lat: 10.8663846,
        lng: 106.8065951,
        appliedCoupons: [
          {
            code: "F2469WER",
            content: "Hội An - Giảm 30% khi đi trong tuần",
            background: Discount1.src,
          },
          {
            code: "F2469WER",
            content: "Tặng 2 bữa tối miễn phí khi du lịch dưới 3 người",
            background: Discount2.src,
          },
        ],
      },
    ],
  },
];

export const places = [
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo1.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
    destinationType: "Vườn bách thảo",
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo3.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
  {
    code: "F2469WER",
    content: "Contrary to popular belief, Lorem Ipsum is not ...",
    background: ShouldGo2.src,
    rating: 4.8,
    ratingCount: 1923,
    toCome: 738,
  },
];
export const images = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1081",
  "https://picsum.photos/1920/1082",
  "https://picsum.photos/1920/1083",
  "https://picsum.photos/1920/1084",
  "https://picsum.photos/1920/1085",
  "https://picsum.photos/1920/1086",
  "https://picsum.photos/1920/1087",
  "https://picsum.photos/1920/1088",
  "https://picsum.photos/1920/1089",
  "https://picsum.photos/1920/1090",
  "https://picsum.photos/1920/1091",
  "https://picsum.photos/1920/1092",
];

export const lineChartData = [
  {
    name: "0H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2H",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "4H",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "6H",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "8H",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "10H",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "12H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12H",
    uv: 2300,
    pv: 1689,
    amt: 2100,
  },
  {
    name: "14H",
    uv: 2134,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "16H",
    uv: 4566,
    pv: 2356,
    amt: 2100,
  },
  {
    name: "18H",
    uv: 2351,
    pv: 1235,
    amt: 2100,
  },
  {
    name: "20H",
    uv: 1235,
    pv: 6777,
    amt: 2100,
  },
  {
    name: "24H",
    uv: 5578,
    pv: 1235,
    amt: 2100,
  },
  {
    name: "26H",
    uv: 1245,
    pv: 5123,
    amt: 2100,
  },
  {
    name: "28H",
    uv: 1246,
    pv: 7999,
    amt: 2100,
  },
  {
    name: "30H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "32H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "34H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "36H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "38H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "40H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const lineChartData1Week = [
  {
    name: "Ngày 1",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày 2",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày 3",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày 4",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày 5",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày 6",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
  {
    name: "Ngày hôm nay",
    uv: Math.random() * (10000 - 1000) + 1000,
    pv: Math.random() * (10000 - 1000) + 1000,
    amt: 2400,
  },
];
