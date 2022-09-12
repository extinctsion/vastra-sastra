<?php
// import phpmailer classes
use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load composer autoload
require 'vendor/autoload.php';
if(isset($_POST["submit"]))
{
    // Admins Address
    $email='preyumkrsingh@gmail.com';
    $name=$_POST['your-name'];
    $uemail=$_POST['your-email'];
    $subject=$_POST['your-subject'];
    $message=$_POST['your-message'];
    // $appointment=$_POST['your-appointment'];
    $timestamp=$_POST['your-appointment'];
    $date=date('d-m-Y',strtotime($timestamp));
    $time=date('g:i A',strtotime($timestamp));
    // date('Y-m-d\TH:i')
   
    $mail = new PHPMailer(true);
    try{
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'vastrasastra.mailservice@gmail.com';
        // main password @#VastraSastra67415#@ 
        $mail->Password = 'utjneabngxjwqqdk';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        // Mailer Name can be changed by changing second argument
        $mail->setFrom('vastrasastra.mailservice@gmail.com','Vastra-Sastra Mailer');
        $mail->addAddress($email,"Admin Vastra Sastra");
        $mail->isHTML(true);
        $mail->Subject = "Mail from ". $name;
        // Body of the message
        $mail->Body = '<p style="font-size: 20px;"><i style="color:#E5E5E5;font-size: 20px;">Message from </i> <i style="font-size: 20px;">'.$uemail.'</i><br><br>'.
                    '<i style="font-size: 16px;">Name: </i><b style="font-size: 16px;color:#E5E5E5;">'.$name.'</b><br>'.
                    '<i style="font-size: 16px;">Subject: </i><b style="font-size: 16px;color:#E5E5E5;">'.$subject.'</b><br>'.'
                    <i style="font-size: 16px;">Appointment request: </i><b style="font-size: 16px;color:#E5E5E5;">'.$date." ".$time.'</b><br>'.
                    '<i style="font-size: 16px;">Message: </i><br><br><b style="font-size: 16px;color:#E5E5E5;">'.$message.'</b></p>';
        $mail->send();
        echo '<script>alert("Your message have been sent to the Owner")</script>';
    }catch(Exception $e){
        echo '<script>alert("Message could not be sent due to error!")</script>';
    }
}
  ?>

<!DOCTYPE HTML> 
<html lang="en-US">
    <head>
        <title>Vastra-Sastra</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="description" content="Template by Colorlib" />
        <meta name="keywords" content="HTML, CSS, JavaScript, PHP" />
        <meta name="author" content="Colorlib" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <link rel="shortcut icon" href="images/logo.png" />
        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i,900|Montserrat:400,700|PT+Serif' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css"  href='css/clear.css' />
        <link rel="stylesheet" type="text/css"  href='css/common.css' />
        <link rel="stylesheet" type="text/css"  href='css/font-awesome.min.css' />
        <link rel="stylesheet" type="text/css"  href='css/carouFredSel.css' />
        <link rel="stylesheet" type="text/css"  href='css/prettyPhoto.css' />
        <link rel="stylesheet" type="text/css"  href='css/sm-clean.css' />
        <link rel="stylesheet" type="text/css"  href='style.css' />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <!--[if lt IE 9]>
                <script src="js/html5.js"></script>
        <![endif]-->

    </head>
    <body>

        <!-- Preloader Gif -->
        <table class="doc-loader">
            <tr>
                <td>
                    <img src="demo-images/preloader.png" alt="Loading..." />
                </td>
            </tr>
        </table>

        <!-- Menu -->
        <div class="menu-wrapper center-relative">
            <nav id="header-main-menu">
                <div class="mob-menu">MENU</div>
                <ul class="main-menu sm sm-clean">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#payment">Payment</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>



        <!-- Home -->

        <div id="home" class="section intro-page">
            <div class="block content-1170 center-relative center-text">
                <img class="top-logo" src="demo-images/logo.png" alt="Boxus" />
                <br>
                <h1 class="big-title">D2C MANAGEMENT CONSULTING</span></h1>
                <p class="title-desc">Support bright students today for a better tomorrow</p>
            </div>
        </div>
        



        <!-- Service -->

        <div id="services" class="section">
            <div class="block content-1170 center-relative">
                <div class="section-title-holder left">
                    <h2 class="entry-title">Services</h2>
                </div>
                <div class="section-content-holder right">
                    <div class="content-wrapper">
                        <script>
                            var slider1_speed = "500";
                            var slider1_auto = "false";
                            var slider1_hover = "true";
                        </script>
                        <div class="image-slider-wrapper relative service slider1">
                            <a id="slider1_next" class="image_slider_next" href ="#"></a>

                            <ul id="slider1" class="image-slider slides">
                                <li>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_01.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">BRANDING</div>
                                            <div class="service-content">
                                                Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_02.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">MOBILE APPS</div>
                                            <div class="service-content">
                                                Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_03.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">WEB</div>
                                            <div class="service-content">
                                                Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_04.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">GRAPHIC</div>
                                            <div class="service-content">
                                                Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.<br />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_03.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">SERVICES</div>
                                            <div class="service-content">
                                                Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_04.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">PSD</div>
                                            <div class="service-content">
                                                Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_02.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">HTML</div>
                                            <div class="service-content">
                                                Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.<br />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-holder ">
                                        <img src="demo-images/icon_01.png" alt="">
                                        <div class="service-content-holder">
                                            <div class="service-title">PHP</div>
                                            <div class="service-content">
                                                Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.<br />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class = "clear"></div>
                        </div>

                    </div>
                </div>
                <div class='clear'></div>
            </div>
        </div>


        <!-- Portfolio -->
        <div id="portfolio" class="section">
            <div class="block content-1170 center-relative">
                <div class="section-title-holder right">
                    <h2 class="entry-title">Portfolio</h2>
                </div>
                <div class="section-content-holder portfolio-holder left">
                    <div class="grid" id="portfolio-grid">
                        <div class="grid-sizer"></div>
                        <div class="grid-item element-item p_one">
                            <a href="single-portfolio.html">
                                <img src="demo-images/portfolio_item_01.jpg" alt="">
                                <div class="portfolio-text-holder">
                                    <div class="portfolio-text-wrapper">
                                        <p class="portfolio-type">
                                            <img src="images/icon_post.svg" alt="">
                                        </p>
                                        <p class="portfolio-text">PSD MOCKUP</p>
                                        <p class="portfolio-sec-text">Smart Watch</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="grid-item element-item p_one_half">
                            <a href="single-portfolio2.html">
                                <img src="demo-images/portfolio_item_02.jpg" alt="">
                                <div class="portfolio-text-holder">
                                    <div class="portfolio-text-wrapper">
                                        <p class="portfolio-type">
                                            <img src="images/icon_post.svg" alt="">
                                        </p>
                                        <p class="portfolio-text">PSD MOCKUP</p>
                                        <p class="portfolio-sec-text">Smart Watch</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="grid-item element-item p_one_half">
                            <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_08.jpg">
                                <img src="demo-images/portfolio_item_08.jpg" alt="">
                                <div class="portfolio-text-holder">
                                    <div class="portfolio-text-wrapper">
                                        <p class="portfolio-type">
                                            <img src="images/icon_post.svg" alt="">
                                        </p>
                                        <p class="portfolio-text">PSD MOCKUP</p>
                                        <p class="portfolio-sec-text">Smart Watch</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="grid-item element-item p_one">
                            <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_05.jpg">
                                <img src="demo-images/portfolio_item_05.jpg" alt="">
                                <div class="portfolio-text-holder">
                                    <div class="portfolio-text-wrapper">
                                        <p class="portfolio-type">
                                            <img src="images/icon_post.svg" alt="">
                                        </p>
                                        <p class="portfolio-text">PSD MOCKUP</p>
                                        <p class="portfolio-sec-text">Smart Watch</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="clear"></div>
                    <div class="block portfolio-load-more-holder">
                        <a target="_self" class="more-posts">LOAD MORE</a>
                        <img src="images/icon_infinity.svg" alt="Load more">
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>


        <!-- About -->
        <div id="about" class="section">
            <div class="block content-1170 center-relative">
                <div class="section-title-holder left">
                    <h2 class="entry-title">CRAFTERS</h2>
                </div>
                <div class="section-content-holder right">
                    <div class="content-wrapper">
                        <div class="content-title-holder">
                            <p class="content-title">About</p>
                        </div>
                        <div class="one_half ">
                            Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum <strong>dolor sit amet</strong> consectetur est adipisicing elit, sed do eiusmod tempor
                        </div>
                        <div class="one_half last ">
                            <span style="color: #4b0082;"><strong>2001-2003 ·</strong></span> <span style="color:#727190;"><em>Art Studio Lorem Donec</em></span><br>
                            <span style="color: #e54b76;"><strong>2003-2006 ·</strong></span> <span style="color:#727190;"><em>Per Set Web Site</em></span><br>
                            <span style="color: #e54b76;"><strong>2006-2010 ·</strong></span> <span style="color:#727190;"><em>Setera Donec EstNunc</em></span><br>
                            <span style="color: #e54b76;"><strong>2010-2013 ·</strong></span> <span style="color:#727190;"><em>Studio Labore Tempor</em></span><br>
                            <span style="color: #e54b76;"><strong>2013-2016 ·</strong></span> <span style="color:#727190;"><em>Magna Ipsum Amet</em></span><br>
                        </div><div class="clear"></div>
                        <br>
                        <br>
                    </div>

                    <div class="full-width ">
                        <script>
                            var aboutImage_speed = "500";
                            var aboutImage_auto = "false";
                            var aboutImage_hover = "true";
                        </script>
                        <div class="image-slider-wrapper relative img aboutImage">
                            <a id="aboutImage_next" class="image_slider_next" href="#"></a>
                            <div class="caroufredsel_wrapper">
                                <ul id="aboutImage" class="image-slider slides">
                                    <li><img src="demo-images/about_img_04.jpg" alt=""></li>
                                    <li><img src="demo-images/about_img_05.jpg" alt=""></li>
                                    <li><img src="demo-images/about_img_06.jpg" alt=""></li>
                                </ul>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <script>
                            var team1_speed = "500";
                            var team1_auto = "false";
                            var team1_hover = "true";
                        </script>
                        <div class="image-slider-wrapper relative team team1">
                            <a id="team1_next" class="image_slider_next" href="#"></a>
                            <div class="caroufredsel_wrapper">
                                <ul id="team1" class="image-slider slides">
                                    <li>
                                        <div class="member-content-holder">
                                            <h4 class="member-name">Robert Williams</h4>
                                            <p class="member-position">LEAD DESIGNER</p>
                                            <div class="member-content">
                                                Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br>
                                            </div>
                                        </div>
                                        <div class="member-image-holder">
                                            <img src="demo-images/about_img_01.jpg" alt="">
                                        </div>
                                        <div class="clear"></div>
                                    </li>

                                    <li>
                                        <div class="member-content-holder">
                                            <h4 class="member-name">John Doe</h4>
                                            <p class="member-position">SEO MASTER</p>
                                            <div class="member-content">
                                                Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br>
                                            </div>
                                        </div>
                                        <div class="member-image-holder">
                                            <img src="demo-images/about_img_02.jpg" alt="">
                                        </div>
                                        <div class="clear"></div>
                                    </li>

                                    <li>
                                        <div class="member-content-holder">
                                            <h4 class="member-name">John Doe</h4>
                                            <p class="member-position">PSD GURU</p>
                                            <div class="member-content">
                                                Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br>
                                            </div>
                                        </div>
                                        <div class="member-image-holder">
                                            <img src="demo-images/about_img_03.jpg" alt="">
                                        </div>
                                        <div class="clear"></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>   <!-- end full-width div -->

                </div>
                <div class="clear"></div>
            </div>
        </div>


        <!-- News -->
        <!-- Payment -->
        <div id ="payment" class="section">
            <div class="block content-1170 center-relative">
                <div class="section-title-holder right">
                    <h2 class="entry-title">Payment</h2>
                </div>
                <div class="section-content-holder portfolio-holder left">
                    <div class="grid" id="portfolio-grid">
                        <div class="grid-sizer"></div>
                        
                    </div>
                    <div class="image-slider-wrapper relative team team1">
                        <!-- <a id="team1_next" class="image_slider_next" href="#"></a> -->

                        <div class="caroufredsel_wrapper">
                    
                                    
                                    <div class="member-image-holder">
                                        <h4 class="member-name">Robert Williams</h4>
                                        <p class="member-position">LEAD DESIGNER</p>
                                        <div class="block portfolio-load-more-holder">
                                            <a  class="more-posts" href="single-portfolio.html">Proceed to Payment</a>
                                            
                                        </div>


                                        <!-- <div class="member-content">
                                            Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br>
                                        </div> -->
                                    </div>
                                    
                                    <div class="clear"></div>
                               
                        </div>
                        <div class="clear"></div>
                    </div>
                    
                    
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <!-- End Payment-->
        
                
                    
                
                

    
        

            


        <!-- Video -->
        

        <!-- Skills -->



        
        <!-- Contact -->
        <div id="contact" class="section">
            <div class="block content-1170 center-relative">
                <div class="section-title-holder left">
                    <h2 class="entry-title">Contact us</h2>
                </div>
                <div class="section-content-holder right">
                    <div class="content-wrapper">
                        <div class="one_half ">
                            <p>Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed do eiusmod tempor.</p>
                            <br>
                            <p><strong><span style="color: #e64b77;">Incididunt ut dolore</span></strong> magna labore eiusmod. Dolor sit amet consectetur est adipisicing elit, sed do eiusmod.</p>
                        </div>
                        <!-- form starting -->
                        <form id= "sendmsg" name="message" method="post" >
                        <div class="one_half last">
                            <div class="contact-form">
                                <p><input id="name" type="text" name="your-name" placeholder="Name" required></p>
                                <p><input id="contact-email" type="email" name="your-email" placeholder="Email" required></p>
                                <p><input id="subject" type="text" name="your-subject" placeholder="Subject" required></p>
                                <p><textarea id="message" name="your-message" placeholder="Message" required></textarea></p><br>
                                <?php date_default_timezone_set('Asia/Kolkata');?>
                                <p style="font-size: 16px; color:black; padding-bottom:8px;">Select appointment date and time</p>
                                <p><input style="color: darkslategray; font-family: revert;" type="datetime-local" value="<?php echo date('Y-m-d\TH:i');?>" name="your-appointment"></p>
                                <!-- <p><input type="submit" onClick="SendMail()" value="SEND"></p> -->
                                <p><input type="submit" name="submit" value="Submit"></p>
                            </div>
                        </div>
                        </form>
                        <!-- 2018-06-12T19:30 -->
                        <!-- form ending -->
                        <div class="clear"></div>
                    </div>
                    <div class="full-width">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4274.290564544589!2d-75.2952832049782!3d40.753669641460846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1444506658649" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <!-- Footer -->

        <footer>
            <div class="footer content-1170 center-relative">
                <ul>
                    <li class="copyright-footer">
                        © vastra-sastra | All rights reserved.
                    </li>
                    <li class="social-footer">
                        <a href="#"><span class="fa fa-twitter"></span></a>
                        <a href="#"><span class="fa fa-behance"></span></a>
                        <a href="#"><span class="fa fa-dribbble"></span></a>
                        <a href="#"><span class="fa fa-linkedin"></span></a>
                        <a href="#"><span class="fa fa-rss"></span></a>
                    </li>
                </ul>
            </div>
        </footer>


        <!--Load JavaScript-->
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type='text/javascript' src='js/jquery.sticky-kit.min.js'></script>
        <script type='text/javascript' src='js/jquery.smartmenus.min.js'></script>
        <script type='text/javascript' src='js/jquery.sticky.js'></script>
        <script type='text/javascript' src='js/jquery.dryMenu.js'></script>
        <script type='text/javascript' src='js/isotope.pkgd.js'></script>
        <script type='text/javascript' src='js/jquery.carouFredSel-6.2.0-packed.js'></script>
        <script type='text/javascript' src='js/jquery.mousewheel.min.js'></script>
        <script type='text/javascript' src='js/jquery.touchSwipe.min.js'></script>
        <script type='text/javascript' src='js/jquery.easing.1.3.js'></script>
        <script type='text/javascript' src='js/imagesloaded.pkgd.js'></script>
        <script type='text/javascript' src='js/jquery.prettyPhoto.js'></script>
        <script type='text/javascript' src='js/main.js'></script>
    </body>
</html>
