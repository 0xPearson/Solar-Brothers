<script>
import abbr from "datasets-us-states-abbr";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      loader: true,
      stateOptions: abbr,
      form: {
        state: "CA",
        zip: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        city: null,
      },
      mobileMenu: false,
      faq: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
      },
    };
  },
  methods: {
    async submitForm() {
      let form = this.form;
      let entries = Object.values(form).filter((x) => x != null);
      if (entries.length === 7) {
        await axios.post("https://solarbrothers.energy/leads", {
          data: form,
        });
        this.form = {
          state: "CA",
          zip: null,
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
          city: null,
        };
        alert("Submitted, we will contact you shortly!");
      } else {
        alert(
          `Missing ${
            Object.values(form).filter((x) => x === null).length
          } values`
        );
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 400);
  },
};
</script>

<template>
  <div class="website">
    <!-- BUILT BY devante.dev -->
    <!-- OVERFLOWS -->
    <div class="loader" v-if="loader === true">
      <div class="loaderCirc"></div>
    </div>
    <div class="loaderPromoWrap" v-if="loader === true">
      <div class="webPromo">Built by devante.dev with 💙</div>
    </div>
    <a href="#contact-us" class="contactUsStickyWrap" title="Contact us now">
      Contact Us
    </a>
    <div class="mobileMenu" v-if="mobileMenu === true">
      <div class="mobileMenuClose bx bx-x" @click="mobileMenu = false"></div>
      <a class="mobileMenuOption" href="#home" @click="mobileMenu = false"
        >Home</a
      >
      <a class="mobileMenuOption" href="#about-us" @click="mobileMenu = false"
        >About Us</a
      >
      <a class="mobileMenuOption" href="#my-options" @click="mobileMenu = false"
        >My Options</a
      >
      <a class="mobileMenuOption" href="#faq" @click="mobileMenu = false"
        >FAQ</a
      >
      <a
        class="mobileMenuOption"
        href="#recent-installs"
        @click="mobileMenu = false"
        >Recent Installs</a
      >
      <a class="mobileMenuOption" href="#contact-us" @click="mobileMenu = false"
        >Get a Quote</a
      >
    </div>
    <!-- PAGE CONTENT -->
    <div class="header" id="home">
      <div class="headerImageWrap">
        <img class="headerImage" src="./assets/brand/logo.png" alt="" />
      </div>
      <div class="headerActions">
        <a class="headerAction" title="Home" href="#home">Home</a>
        <a class="headerAction" title="Services" href="#services">Services</a>
        <a
          class="headerAction"
          title="Learn about Solar Brothers"
          href="#about-us"
          >About Us</a
        >
        <a
          class="headerAction"
          title="Browse my solar plan options"
          href="#my-options"
          >My Options</a
        >
        <a class="headerAction" title="Frequently Asked Questions" href="#faq"
          >FAQ</a
        >
        <a class="headerAction" href="#recent-installs">Recent Installs</a>
        <a class="headerAction quoteBtn" href="#contact-us">Get a Quote</a>
      </div>
      <div
        class="headerMobileMenu bx bx-menu"
        title="Browse Options"
        @click="mobileMenu = !mobileMenu"
      ></div>
    </div>
    <div class="bodyContent">
      <!-- HERO -->
      <div class="heroSection">
        <div class="heroSectionTextWrap">
          <div class="annWrap">
            <span class="welcomeText">Welcome to the</span>
            <span class="futureBobMemeText">FUTURE</span>
            <span class="ofEnergyText">OF ENERGY</span>
            <div class="heroContactUsWrap">
              <a
                class="heroContactUs"
                href="#services"
                title="Learn about solar, our services and the benefits to installing solar"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="heroSectionImageWrap">
          <video
            playsinline
            autoplay
            muted
            loop
            class="heroSectionImage"
            src="https://cdn.discordapp.com/attachments/494937907480756254/1056008413034860564/trim.74873E7E-0036-41E8-BF24-EA8BD2B3E550.mov"
          ></video>
        </div>
      </div>
      <!-- SERVICES OFFERED -->
      <div class="servicesOfferedWrap" id="services">
        <div class="servicesOffered">
          <div class="servicesOfferedHeader">
            Services <span class="solarBlue">Offered</span>
          </div>
          <div class="servicesOfferedBody">
            <a href="#contact-us" class="servicesOfferedBodyItem">
              <img
                class="servicesOfferedBodyItemImage"
                src="https://media.istockphoto.com/id/1312100371/vector/solar-powered-house.jpg?s=612x612&w=0&k=20&c=TgvvuWQGq0tRYb1QvTQUZUIz7JaKAHZM-5S1ojEbEWE="
                alt=""
              />
              <div class="servicesOfferedBodyItemHeader">Solar Panels</div>
            </a>
            <a href="#contact-us" class="servicesOfferedBodyItem">
              <img
                class="servicesOfferedBodyItemImage"
                src="https://media.istockphoto.com/id/1314710609/vector/smartphone-electricity-app-for-renewable-power-stations-solar-panels-wind-battery-storage.jpg?s=612x612&w=0&k=20&c=38G7OIbBkIEEenkYH116lJSQ5NjhWvMXrHynJtsHK8k="
                alt=""
              />
              <div class="servicesOfferedBodyItemHeader">Battery Storage</div>
            </a>
            <a href="#contact-us" class="servicesOfferedBodyItem">
              <img
                class="servicesOfferedBodyItemImage"
                src="https://media.istockphoto.com/id/1315374335/vector/renewable-energy-smart-grid-power-station-with-solar-wind-and-battery-storage.jpg?s=612x612&w=0&k=20&c=MI-Q_ScxcbWjhtXS-sCaxfyTNU0NyUypQZ2YPTZerKw="
                alt=""
              />
              <div class="servicesOfferedBodyItemHeader">Solar Maintenance</div>
            </a>
          </div>
        </div>
      </div>
      <!-- ABOUT US -->
      <div class="aboutUsWrap" id="about-us">
        <div class="aboutUs">
          <div class="aboutUsHeader">
            About <span class="solarBlue"><strong>SolarBrothers</strong></span>
          </div>
          <div class="aboutUsBody">
            At <strong>SolarBrothers</strong>, we are passionate about making
            the world a better place through the use of
            <a
              href="https://www.energy.gov/eere/renewable-energy"
              target="_blank"
              class="reGreen"
              >renewable energy</a
            >. As a solar company, we believe that harnessing the power of the
            sun is not only good for the environment, but it also makes economic
            sense for homeowners and businesses alike. <br /><br />Founded by
            two brothers who have always been drawn to the power of the sun,
            <strong>SolarBrothers</strong> was created with the goal of making
            solar energy accessible and affordable for everyone. We are
            committed to providing high-quality, reliable solar solutions that
            are tailored to the unique needs of each of our clients.
            <br /><br />In addition to our commitment to renewable energy, we
            also believe in giving back to the community. That's why we are
            proud to donate a portion of our profits to organizations that are
            working to protect the environment and promote sustainability.
          </div>
        </div>
      </div>
      <!-- BRANDS MARQUEE -->
      <div class="brandsMarquee">
        <span>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/Enphase.png"
              alt=""
            />
          </div>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/LG.png"
              alt=""
            />
          </div>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/QCELLS.png"
              alt=""
            />
          </div>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/SolarEdge.png"
              alt=""
            />
          </div>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/SUNNOVA.png"
              alt=""
            />
          </div>
          <div class="brandsMarqueeImageWrap">
            <img
              class="brandsMarqueeImage"
              src="./assets/brands/Tesla.png"
              alt=""
            />
          </div>
        </span>
      </div>
      <!-- What are my options -->
      <div class="whatAreMyOptionsWrap" id="my-options">
        <div class="whatAreMyOptionsBody">
          <div class="whatAreMyOptionsHeader">
            <span class="solarBlue"><strong>Your</strong></span> Options
          </div>
          <div class="whatAreMyOptionsBoxes">
            <div class="optionQueryHead">
              If you are considering a solar energy system for your home or
              business, you have several options to choose from:
            </div>
            <div class="optionQueryBox">
              <div class="optionQueryBoxHeadWrap">
                <div class="optionQueryBoxHead">Loan</div>
              </div>
              <div class="optionQueryBoxContent">
                You can finance the purchase of a solar energy system through a
                loan. This option allows you to spread the cost of the system
                over time, while also taking advantage of any applicable tax
                credits or incentives.
              </div>
            </div>
            <div class="optionQueryBox">
              <div class="optionQueryBoxHeadWrap">
                <div class="optionQueryBoxHead">Lease</div>
              </div>
              <div class="optionQueryBoxContent">
                With a lease, you can use a solar energy system without having
                to purchase it outright. Instead, you pay a monthly fee to use
                the system, which is usually lower than your current electricity
                bill. The company that owns the system is responsible for its
                maintenance and repair.
              </div>
            </div>
            <div class="optionQueryBox">
              <div class="optionQueryBoxHeadWrap">
                <div class="optionQueryBoxHead">
                  Power Purchase Agreement (PPA)
                </div>
              </div>
              <div class="optionQueryBoxContent">
                With a PPA, you pay for the electricity that your solar energy
                system generates, rather than the system itself. This option
                allows you to take advantage of solar energy without having to
                make a large upfront investment.
              </div>
            </div>
            <div class="optionQueryBox">
              <div class="optionQueryBoxHeadWrap">
                <div class="optionQueryBoxHead">Cash</div>
              </div>
              <div class="optionQueryBoxContent">
                If you have the funds available, you can purchase a solar energy
                system outright with cash. This option allows you to own the
                system and take advantage of any applicable tax credits or
                incentives.
              </div>
            </div>
            <div class="optionQueryFoot">
              *It is important to carefully consider all options and choose the
              one that best fits your budget and energy needs.
            </div>
          </div>
        </div>
      </div>
      <!-- FAQ -->
      <div class="faqWrap" id="faq">
        <div class="faq">
          <div class="faqHeader">Frequently Asked Questions</div>
          <div class="faqBody">
            <div class="faqRow" @click="faq.one = !faq.one">
              <div class="faqRowInner">
                <div class="faqRowTitle">What is solar energy?</div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.one === true,
                    'bx-plus': faq.one != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.one === true" class="faqRowContent">
                Solar energy is a form of renewable energy that is generated by
                capturing the sun's rays and converting them into electricity
                for your home or business.
              </div>
            </div>
            <div class="faqRow" @click="faq.two = !faq.two">
              <div class="faqRowInner">
                <div class="faqRowTitle">
                  How does a solar energy system work?
                </div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.two === true,
                    'bx-plus': faq.two != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.two === true" class="faqRowContent">
                A solar energy system consists of solar panels that are
                installed on the roof of your home or business. These panels
                collect sunlight and convert it into direct current (DC)
                electricity. The DC electricity is then sent to an inverter,
                which converts it into alternating current (AC) electricity that
                can be used to power your home or business.
              </div>
            </div>
            <div class="faqRow" @click="faq.three = !faq.three">
              <div class="faqRowInner">
                <div class="faqRowTitle">How much do solar panels cost?</div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.three === true,
                    'bx-plus': faq.three != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.three === true" class="faqRowContent">
                The cost of solar panels can vary depending on a number of
                factors, such as the size of your system and the type of panels
                you choose. In general, the cost of solar panels has decreased
                in recent years, making them more affordable than ever.
              </div>
            </div>
            <div class="faqRow" @click="faq.four = !faq.four">
              <div class="faqRowInner">
                <div class="faqRowTitle">Are solar panels worth it?</div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.four === true,
                    'bx-plus': faq.four != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.four === true" class="faqRowContent">
                Yes, solar panels are worth it! In addition to being a clean and
                renewable source of energy, they can also save you money on your
                monthly electricity bills. Plus, many states offer financial
                incentives, such as tax credits and rebates, to help offset the
                cost of installing a solar energy system.
              </div>
            </div>
            <div class="faqRow" @click="faq.five = !faq.five">
              <div class="faqRowInner">
                <div class="faqRowTitle">How long do solar panels last?</div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.five === true,
                    'bx-plus': faq.five != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.five === true" class="faqRowContent">
                Solar panels are designed to last for many years, typically
                between 25-30 years. Over time, the efficiency of the panels may
                decrease slightly, but they should continue to generate
                electricity for many years to come.
              </div>
            </div>
            <div class="faqRow" @click="faq.six = !faq.six">
              <div class="faqRowInner">
                <div class="faqRowTitle">
                  Are solar panels difficult to maintain?
                </div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.six === true,
                    'bx-plus': faq.six != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.six === true" class="faqRowContent">
                No, solar panels are very easy to maintain. They require little
                to no maintenance, and regular cleaning is the only thing that
                is typically needed to keep them in good working condition.
              </div>
            </div>
            <div class="faqRow" @click="faq.seven = !faq.seven">
              <div class="faqRowInner">
                <div class="faqRowTitle">
                  Can solar panels work on cloudy days?
                </div>
                <div
                  class="faqRowControl bx"
                  :class="{
                    'bx-minus': faq.seven === true,
                    'bx-plus': faq.seven != true,
                  }"
                ></div>
              </div>
              <div v-if="faq.seven === true" class="faqRowContent">
                Yes, solar panels can still generate electricity on cloudy days,
                although the amount of electricity they produce may be less than
                on sunny days. Solar panels are designed to efficiently capture
                and convert sunlight into electricity, so they can still
                generate power even on days with low levels of sunlight.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- RECENT INSTALLS GRID -->
      <div class="recentInstallsWrap" id="recent-installs">
        <div class="recentInstalls">
          <div class="recentInstallsHeaderWrap">
            <div class="recentInstallsHeaderText">
              Strengthen <span class="solarBlue">Your Infrastructure</span>
            </div>
            <div
              class="recentInstallsHeaderText recentInstallsHeaderTextPhrase"
            >
              <strong>Gain independence</strong>
              <span class="solarBlue">from the grid.</span>
            </div>
          </div>
          <div class="recentInstallGrid">
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/1.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/2.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/3.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/4.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/5.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/6.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/7.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/8.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/9.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/10.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/11.jpg"
                alt=""
              />
            </div>
            <div class="recentInstallGridImageWrap">
              <img
                class="recentInstallGridImage"
                src="./assets/installs/12.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- CONTACT FORM -->
      <div class="contactFormWrap" id="contact-us">
        <div class="contactFormContent">
          <div class="contactFormContentHeaderWrap">
            <div class="contactFormContentHeader">Get in Touch</div>
          </div>
          <div class="contactFormContentBody">
            <div class="contactFormContentBodyForm">
              <div class="contactFormContentBodyFormBox">
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    class="formInput"
                    v-model="form.firstName"
                  />
                </div>
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="formInput"
                    v-model="form.lastName"
                  />
                </div>
              </div>
              <div class="contactFormContentBodyFormBox">
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="form.email"
                    class="formInput"
                  />
                </div>
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">Phone Number</label>
                  <input
                    type="text"
                    placeholder="(XXX)-XXX-XXXX"
                    v-model="form.phone"
                    class="formInput"
                  />
                </div>
              </div>
              <div class="contactFormContentBodyFormBox">
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">State</label>
                  <select name="" id="" v-model="form.state" class="formInput">
                    <option
                      v-for="state in stateOptions"
                      :key="state"
                      :value="state"
                    >
                      {{ state }}
                    </option>
                  </select>
                </div>
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    v-model="form.zip"
                    class="formInput"
                  />
                </div>
              </div>
              <div class="contactFormContentBodyFormBox oneFormBox">
                <div class="contactFormContentBodyFormBoxInputWrap">
                  <label class="inputLabel">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    v-model="form.city"
                    class="formInput"
                  />
                </div>
              </div>
              <div class="formSubmitBtnWrap">
                <div
                  class="formSubmitBtn"
                  title="Submit details now"
                  @click="submitForm()"
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- TERMS OF SERVICE & LEGAL -->
      <div class="termsWrap">
        <div class="terms">
          Every solar energy system designed by SolarBrothers is tailored to the
          unique characteristics of a customer's home and energy needs, as well
          as local regulations and incentives. All of our systems are backed by
          a 25 year production guarantee. For more information, refer to your
          installation agreement with SolarBrothers, which may contain
          exclusions or other relevant details. The statements made by
          SolarBrothers on this website are based on the data available at the
          time of the last update. There is no guarantee of specific financial
          savings. Information about tax rebates and incentives should be
          verified with a tax professional, as such programs are subject to
          change and may have specific eligibility requirements. The warranty
          and repair of the system are governed by the terms outlined in your
          installation agreement with SolarBrothers.
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footerImageWrap">
        <img class="footerImage" src="./assets/brand/logo.png" alt="" />
      </div>
      <div class="footerTextWrap">
        <div class="footerTextBox">
          <div class="footerTextBoxHeader">Resources</div>
          <a class="footerTextBoxLink" href="#home">Home</a>
          <a class="footerTextBoxLink" href="#about-us">About Us</a>
          <a class="footerTextBoxLink" href="#my-options">My Options</a>
          <a class="footerTextBoxLink" href="#faq">FAQ</a>
          <a class="footerTextBoxLink" href="#recent-installs"
            >Recent Installs</a
          >
          <a class="footerTextBoxLink" href="#contact-us">Get a Quote</a>
        </div>
        <div class="footerTextBox">
          <div class="footerTextBoxHeader">Services</div>
          <a class="footerTextBoxLink" href="#services">Solar Panels</a>
          <a class="footerTextBoxLink" href="#services">Battery Storage</a>
          <a class="footerTextBoxLink" href="#services">Solar Maintenance</a>
        </div>
        <div class="footerTextBox">
          <div class="footerTextBoxHeader">Contact Us</div>
          <a class="footerTextBoxLink" href="#contact-us">Get a Quote</a>
          <a href="mailto:solarbrothersinc@gmail.com" class="footerTextBoxLink"
            >solarbrothersinc@gmail.com</a
          >
          <a href="tel:6617331553" class="footerTextBoxLink">661-733-1553</a>
        </div>
        <div class="footerTextBox">
          <div class="footerTextBoxHeader">Follow Us</div>
          <a
            href="https://www.facebook.com/profile.php?id=100086966801205&mibextid=LQQJ4d"
            target="_blank"
            class="footerTextBoxLink bx bxl-facebook-circle socialIcon"
          ></a>
          <a
            href="https://instagram.com/solarbrothersinc"
            target="_blank"
            class="footerTextBoxLink bx bxl-instagram-alt socialIcon"
          ></a>
        </div>
      </div>
    </div>
    <div class="footerCopywright">
      <div class="footerCopywrightImageWrap">
        <img
          class="footerCopywrightImage"
          src="./assets/brand/logo.png"
          alt=""
        />
      </div>
      <div class="footerCopywrightFooterTextWrap">
        <div class="footerCopywrightFooterText">© 2023 Solar Brothers Inc.</div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  text-overflow: ellipsis;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

a {
  text-decoration: none;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: rgb(228, 228, 228);
  border-radius: 2px;
}

body::-webkit-scrollbar-thumb {
  background: #01a0c6;
  border-radius: 2px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #3685a4;
  cursor: pointer;
}

.website {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 130px;
  overflow: hidden;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 10px;
  background: #fff;
  border-bottom: 7px solid #01a0c6;
}

.headerImageWrap {
  display: flex;
  align-items: center;
}

.headerImage {
  width: 215px;
  cursor: pointer;
}

.headerActions {
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-left: auto;
}

.headerAction {
  margin-right: 1.2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 200ms ease 0s;
  color: #181818;
  font-weight: 500;
}

.headerAction:last-child {
  margin: 0;
}

.headerAction:hover {
  color: #01a0c6;
}

.quoteBtn {
  background: #01a0c6;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  transition: all 400ms ease 0s;
  font-size: 16px;
}

.quoteBtn:hover {
  color: #fff;
}

.bodyContent {
  min-height: 175vh;
  display: flex;
  flex-direction: column;
}

.heroSection {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.heroSectionTextWrap {
  text-align: left;
  line-height: 0.95;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  padding: 10px;
  color: #fff;
  z-index: 99;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
}

.annWrap {
  display: flex;
  flex-direction: column;
}

.welcomeText {
  font-size: 2.5rem;
  font-weight: 600;
}

.futureBobMemeText {
  font-size: 25vh;
  font-weight: 700;
  color: #01a0c6;
}

.ofEnergyText {
  font-size: 2.5rem;
  font-weight: 700;
}

.heroSectionImageWrap {
  position: absolute;
  width: 100%;
}

.heroSectionImage {
  width: 150%;
  height: 200%;
}

.recentInstallsWrap {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
}

.recentInstalls {
  /* background: seagreen; */
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 20vh;
}

.recentInstallsHeaderWrap {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  margin-top: 1rem;
}

.recentInstallsHeaderText {
  font-size: 2.3rem;
  color: #181818;
}

.recentInstallsHeaderTextPhrase {
  font-size: 22px;
}

.recentInstallGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
}

.recentInstallGridImageWrap {
  display: flex;
  align-items: center;
}

.recentInstallGridImage {
  width: 100%;
  height: 200px;
  cursor: pointer;
}

.aboutUsWrap {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 7px solid #01a0c6;
  padding-bottom: 2.5rem;
  padding-top: 1rem;
}

.aboutUs {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.aboutUsHeader {
  font-size: 2.3rem;
}

.aboutUsBody {
  min-height: 25vh;
  font-size: 1.15rem;
  line-height: 2;
  text-align: left;
}

.solarBlue {
  color: #01a0c6;
}

.termsWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(249, 249, 249, 1);
}

.terms {
  width: 80%;
  padding: 10px;
  font-size: 12px;
}

.footer {
  width: 100%;
  border-top: 7px solid #01a0c6;
  min-height: 250px;
  padding: 1rem;
  display: flex;
  padding-top: 2.5rem;
}

.footerImageWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.footerImage {
  width: 250px;
  height: 250px;
}

.footerTextWrap {
  margin-left: 1.5rem;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.footerTextBox {
  display: flex;
  flex-direction: column;
}

.footerTextBoxLink {
  color: #181818;
  transition: all 200ms ease 0s;
  cursor: pointer;
}

.footerTextBoxLink:hover {
  color: #3685a4;
}

.footerTextBoxHeader {
  font-size: 20px;
  font-weight: 600;
  color: #01a0c6;
}

.footerCopywright {
  margin-top: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  align-items: center;
}

.footerCopywrightImageWrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerCopywrightImage {
  width: 140px;
}

.footerCopywrightFooterTextWrap {
  margin-top: -30px;
  display: flex;
  align-items: center;
}

.footerCopywrightFooterText {
  font-size: 18px;
  color: #181818c6;
}

.contactUsStickyWrap {
  position: fixed;
  right: 0;
  bottom: 0;
  background: #01a0c6;
  margin-bottom: 5rem;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 400ms ease 0s;
  z-index: 1000;
}

.contactUsStickyWrap:hover {
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.socialIcon {
  font-size: 2rem;
  color: #01a0c6;
}

.socialIcon:hover {
  color: #3685a4;
}

.headerMobileMenu {
  display: none;
}

.mobileMenu {
  display: none;
}

.reGreen {
  color: #29b675;
}

.servicesOfferedWrap {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  border-bottom: 7px solid #01a0c6;
}

.servicesOffered {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.servicesOfferedHeader {
  font-size: 2.3rem;
  width: 100%;
  text-align: center;
}

.servicesOfferedBody {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding-top: 1rem;
}

.servicesOfferedBodyItem {
  background: grey;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 60vh;
}

.servicesOfferedBodyItemImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 400ms ease 0s;
}

.servicesOfferedBodyItemImage:hover {
  transform: scale(1.1);
}

.recentInstallGridImage:hover {
  transition: all 400ms ease-in-out 0s;
  cursor: pointer;
  transform: scale(1.3);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
}

.servicesOfferedBodyItemHeader {
  position: absolute;
  right: 0;
  margin-right: 10px;
  background: #01a0c6;
  margin-top: 10px;
  color: #fff;
  border-radius: 6px;
  padding: 10px;
}

.faqWrap {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  padding-bottom: 2.5rem;
  border-top: 7px solid #01a0c6;
}

.faq {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.faqHeader {
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
  font-weight: 500;
}

.faqBody {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 1.5rem;
  grid-gap: 1rem;
}

.faqRow {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background: rgba(249, 249, 249, 0.9);
}

.faqRowInner {
  border-bottom: 1px solid #3685a4;
  width: 100%;
  display: flex;
  align-items: center;
}

.faqRow:last-child {
  border: none;
}

.faqRowTitle {
  color: #01a0c6;
  font-size: 20px;
  font-weight: 600;
}

.faqRowControl {
  margin-left: auto;
  font-size: 30px;
  color: #3685a4;
}

.faqRowContent {
  background: rgba(249, 249, 249, 0.9);
  padding: 10px;
  display: flex;
  text-align: left;
  margin-top: 10px;
  border-radius: 6px;
}

.brandsMarquee {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
}

.brandsMarquee span {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  transform: translateX(100%);
  animation: scroll-left 30s linear infinite;
}

.brandsMarqueeImageWrap {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.brandsMarqueeImage {
  width: 100px;
  filter: grayscale(100%);
  transition: all 400ms ease 0s;
}

.brandsMarqueeImage:hover {
  animation-play-state: paused;
  filter: grayscale(0%);
}

.whatAreMyOptionsWrap {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.whatAreMyOptionsBody {
  display: flex;
  flex-direction: column;
  width: 80%;
  /* background: red; */
  padding-top: 1rem;
  height: 100%;
}

.whatAreMyOptionsHeader {
  width: 100%;
  font-size: 2.3rem;
  text-align: center;
}

.whatAreMyOptionsBoxes {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  grid-gap: 10px;
  padding-top: 10px;
}

.optionQueryHead {
  font-size: 1rem;
  text-align: center;
}

.optionQueryFoot {
  font-size: 13px;
  text-align: center;
  padding-top: 1rem;
}

.optionQueryBox {
  padding: 10px;
  border-radius: 3px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(249, 249, 249, 1);
}

.optionQueryBoxHeadWrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.optionQueryBoxHead {
  border-radius: 3px;
  display: flex;
  padding: 5px 10px;
  color: #01a0c6;
  background: rgba(1, 160, 198, 0.05);
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
}

.optionQueryBoxContent {
  padding-top: 1rem;
  width: 100%;
  white-space: normal;
  text-align: center;
}

.contactFormWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
}

.contactFormContent {
  width: 80%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
}

.contactFormContentHeaderWrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contactFormContentHeader {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #01a0c6;
  border-bottom: 3px solid #01a0c6;
}

.contactFormContentBody {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

.contactFormContentBodyForm {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
}

.contactFormContentBodyFormBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.contactFormContentBodyFormBoxInputWrap {
  display: flex;
  flex-direction: column;
}

.inputLabel {
  font-size: 13px;
  color: #01a0c6;
}

.oneFormBox {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.formInput {
  padding: 10px;
  font-size: 13px;
  transition: all 400ms ease 0s;
  border-radius: 3px;
  border: 2px solid #3685a4;
}

.formInput:focus {
  outline: none;
  border: 2px solid #01a0c6;
}

.formSubmitBtnWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.formSubmitBtn {
  cursor: pointer;
  background: #3685a4;
  padding: 5px 20px;
  border-radius: 3px;
  color: #fff;
  font-size: 1.3rem;
  transition: all 400ms ease 0s;
}

.formSubmitBtn:hover {
  background: #01a0c6;
}

.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  backdrop-filter: blur(20px);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(1, 160, 198, 0.3)
  );
}

.loaderCirc {
  border: 10px solid #2b2b2b;
  border-top: 10px solid #01a0c6;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

.loaderPromoWrap {
  padding: 10px;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);
  border-top: 3px solid #01a0c6;
  z-index: 9999999999999;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-style: oblique;
}

.webPromo {
  color: #fff;
  font-size: 13px;
}

.heroContactUsWrap {
  display: flex;
  margin-top: 2rem;
  align-items: center;
}

.heroContactUs {
  background: #3685a4;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  transition: all 400ms ease 0s;
}

.heroContactUs:hover {
  background: #01a0c6;
  box-shadow: 0px 0px 10px #01a0c6;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* MOBILE */
@media screen and (max-width: 1000px) {
  .headerActions {
    display: none;
  }

  .footerTextWrap {
    margin-left: 1.5rem;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }

  .footerImageWrap {
    display: none;
  }

  .headerMobileMenu {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #01a0c6;
    font-size: 2.7rem;
    cursor: pointer;
  }

  .mobileMenu {
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(1, 160, 198, 0.45)); */
    display: flex;
    flex-direction: column;
    background: #01a0c6;
    z-index: 99999;
  }

  .mobileMenuClose {
    color: #fff;
    font-size: 2.3rem;
    margin-left: auto;
    cursor: pointer;
    margin-top: 3px;
  }

  .mobileMenuOption {
    color: #fff;
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 400ms ease;
  }

  .mobileMenuOption:hover {
    color: #fff;
  }

  .servicesOfferedBody {
    grid-template-columns: repeat(1, 1fr);
  }

  .servicesOfferedBodyItem {
    height: 45vh;
  }

  .recentInstallGrid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  .recentInstallGridImage {
    height: 40vh;
  }

  .faqHeader {
    font-size: 19px;
  }

  .servicesOfferedBodyItem {
    height: 50vh;
    width: 100%;
  }

  .contactFormContentBodyForm {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }

  .contactFormContentBodyFormBox {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }

  select {
    padding: 10px;
  }

  .brandsMarqueeImageWrap {
    margin-right: 15vh;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-250%);
    }
  }

  .futureBobMemeText {
    font-size: 17vh;
  }

  .heroSectionImage {
    width: 200%;
  }

  .welcomeText {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .ofEnergyText {
    font-size: 2rem;
    font-weight: 700;
  }
}

@media screen and (max-width: 650px) {
  .futureBobMemeText {
    font-size: 15vh;
  }

  .heroSectionImage {
    width: 350%;
    height: 350%;
  }
}

@media screen and (max-width: 450px) {
  .futureBobMemeText {
    font-size: 10vh;
  }
}

@media screen and (max-width: 370px) {
  .heroSectionImage {
    width: 415%;
    height: 415%;
  }
}

@media screen and (max-width: 300px) {
  .heroSectionImage {
    width: 425%;
    height: 425%;
  }
}

@media screen and (max-width: 250px) {
  .heroSectionImage {
    width: 450%;
    height: 450%;
  }
}
</style>
