import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Banner, ContentList } from "components";
import { Layout } from "containers";
import http from "services/http";

import * as S from "./styles";

export const Home = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [contents, setContents] = useState<any[]>([]);

  const handleGetBanners = useCallback(async () => {
    const { data } = await http.get("/banners");
    setBanners(data);
  }, []);

  const handleGetContents = useCallback(async () => {
    const { data } = await http.get("/contents");
    setContents(data);
  }, []);

  useEffect(() => {
    handleGetBanners();
    handleGetContents();
  }, []);

  return (
    <Layout>
      <S.Container>
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Banner
                url={banner.normalize}
                imageUrl={banner.cover}
                title={banner.title}
                description={banner.sinopse}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <S.Content>
          {contents.map((content) => (
            <ContentList key={content.id} data={content} />
          ))}
        </S.Content>
      </S.Container>
    </Layout>
  );
};
