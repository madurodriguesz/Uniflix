import { useNavigate } from "react-router";
import { MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { IContentListProps } from "./interfaces";
import * as S from "./styles";

export const ContentList = ({ data }: IContentListProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TitleContainer>
        <span>{data.name}</span>
        <MdChevronRight size={24} />
      </S.TitleContainer>

      <S.ListContainer>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          modules={[Pagination]}
          navigation
          loop
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {data.list.map((item) => (
            <SwiperSlide key={item.id}>
              <S.Cover
                src={item.cover}
                alt={item.title}
                onClick={() => navigate(`/watch/${item.normalize}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ListContainer>
    </S.Container>
  );
};
