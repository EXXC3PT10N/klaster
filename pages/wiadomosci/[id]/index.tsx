import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedPost from '../../../components/featured-posts'
import Hero from '../../../components/hero'
import heroImg from '../../../public/assets/images/hero/wiadomosci-header.jpg'
import placeholderImg from '../../../public/assets/images/wiadomosci-konkret-1.jpg'

const Wiadomosci_single: NextPage = () => {
  return ( 
    <>
        <Hero imgSrc={heroImg} text={"Wiadomości"} />
        <section className="header mb-[15px]">
            <div className="container">
                <div className="text-breadcrumbs p-2.5 my-2.5">
                    <ul className="flex flex-wrap w-full">
                        <li><Link href='/'><a className="" href="">Klaster</a></Link></li>
                        <li><Link href='/wiadomosci'><a className="" href="">Wiadomości</a></Link></li>
                        <li><a className="disabled active" href="">Tytuł wiadomości</a></li>
                    </ul>
                </div>
                <div className="text-single--filters pt-2.5 pb-5">
                    <ul className="flex flex-wrap w-full">
                        <li><a href="">Kategoria</a></li>
                        <li><a href="">Autor</a></li>
                        <li><a href="">Data dodania</a></li>
                        <li><a href="">Tagi</a></li>
                    </ul>
                </div>
                
                <div className="flex">
                    <div className="w-full">
                        <div className="text-h2 underline-custom">
                            <h2>Tytuł wybranej wiadomości</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-image">
            <div className="container">
                <div className="grid-custom gapped">
                    <div className="col-span-5 flex flex-col items-center justify-center text-base">
                        <p>Elit sit vitae, risus consequat ante. Ut mauris sit netus pharetra dolor arcu interdum tristique. Lectus malesuada quisque cursus pharetra amet, lacus. Consectetur vitae accumsan consectetur pulvinar risus viverra eu eget eget. Ut porttitor eros molestie aliquet volutpat orci.</p>
                        <br/>
                        <p>Ac massa morbi mauris maecenas vitae lacinia risus arcu lacus. Justo volutpat ut risus nibh interdum tincidunt tempor. Mauris hendrerit id quis arcu aliquet curabitur faucibus sed ultricies. Diam proin et nunc dui etiam enim risus massa magna. </p>
                        <br/>
                        <p>Sem nisi, pharetra parturient diam, enim ornare amet. Id quisque sit varius commodo viverra. Ligula malesuada commodo quisque imperdiet posuere pharetra. Fermentum nisl facilisi amet, urna. Nibh venenatis phasellus turpis a senectus a fringilla.</p>
                    </div>
                    <div className="col-span-7">
                        <Image className="rounded-sm" src={placeholderImg} alt="placeholder image" />
                    </div>
                </div>
            </div>
        </section>
        <section className="content mt-[50px] mb-[70px]">
            <div className="container">
                <div className="flex">
                    <div className="w-full text-base">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere malesuada orci tortor nunc. Sagittis, platea non morbi vulputate cursus cras sed. Libero praesent dolor placerat id at eget libero quam. Imperdiet vel tristique etiam tellus purus eget tellus. Egestas gravida nullam elit suscipit ut. Varius sed sit orci blandit neque, nibh. Penatibus morbi aliquam aenean consequat eros, arcu, amet, dignissim vulputate.</p>
                        <br/>
                        <p>Vulputate id turpis metus ultrices. Donec vulputate blandit ut sed lorem auctor tincidunt. Amet ac, arcu, enim, ut. Ornare faucibus tristique mauris nunc adipiscing sit aliquet aliquam. Donec ipsum ultrices ridiculus consectetur egestas mi convallis blandit. Proin mattis egestas condimentum eget malesuada. Lacus enim, massa fusce faucibus. Ipsum augue elit quis faucibus mauris eu felis dignissim. Tellus adipiscing ante enim, sed enim et. Pellentesque morbi non pulvinar tristique consequat lacus. Pellentesque id in vestibulum sed. Amet at etiam sed amet. Risus facilisis elementum quam ipsum nulla metus. Cras aenean rhoncus faucibus bibendum maecenas justo amet.</p>
                        <br/>
                        <p>Velit amet, in id elit tempor, tellus, arcu quis. Sem urna turpis in pharetra lectus ultrices lectus nec facilisis. Sed ultricies id habitant quam faucibus arcu maecenas. Pretium sed proin lacus leo mauris integer. Accumsan vel amet, ante fermentum. Morbi viverra at eu, ac purus cursus. Parturient donec urna felis, metus ut lectus. Odio morbi aliquam quisque sit. Tellus vitae fames orci phasellus eu tincidunt. Lectus tortor euismod lectus integer ornare massa donec id facilisis. Mi tincidunt diam purus varius non. Proin a lacus posuere dolor. Velit rhoncus tincidunt id eu porta sed consectetur.</p>
                        <br/>
                        <p>Neque integer tempor ipsum semper hendrerit diam. Nulla neque convallis nibh augue sed quis nibh. Orci scelerisque turpis eget tellus tortor molestie sit consectetur sit. Felis ut tempus elit mi, ut sed dui. Amet libero egestas velit suspendisse nulla egestas. Dui tellus purus bibendum placerat neque. Facilisis egestas odio tempus commodo. A nulla dolor purus consectetur interdum dui malesuada odio. Nunc eget lorem leo habitasse pellentesque. Dignissim lorem aliquet purus et pharetra commodo tellus augue. A eget viverra ornare risus fermentum. Turpis cursus malesuada id consectetur tempus ac, congue donec. Risus, massa faucibus tempor mus arcu.</p>
                    </div>
                </div>
                    
                
            </div>
        </section>
        <FeaturedPost/>
    </>
  )
}

export default Wiadomosci_single
