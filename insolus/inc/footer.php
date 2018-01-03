        <footer id="footer" class="pure-g">
            <div class="pure-u-1 pure-u-sm-1-3 address geneve">
                <div itemscope itemtype="http://schema.org/Corporation">
                    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                        <span itemprop="description" class="description">Genève</span>
                        <span itemprop="alternateName">inSolus Sàrl</span>
                        <span itemprop="streetAddress">Rue des Épinettes 12 ter</span>
                        <span itemprop="addressCountry" class="addressCountry">CH</span>-<span itemprop="postalCode" class="postalCode">1227</span>
                        <span itemprop="addressLocality" class="addressLocality">Carouge</span> <span itemprop="addressRegion" class="addressRegion">Genève</span>
                    </div>
                </div>
            </div>
            <div class="pure-u-1 pure-u-sm-1-3 address telephone">
                <hr>
                <div class="address" itemscope itemtype="http://schema.org/Corporation">
                    <div itemprop="address" itemscope itemtype="http://schema.org/ContactPoint">
                        E-mail : <span itemprop="email" class="email"><script>document.write("<a href=" + "" + decode("znvygb:vasb@vafbyhf.pbz") + ">" + decode("vasb@vafbyhf.pbz") + "</a>");</script></span>
                        <hr>
                        Téléphone : <span itemprop="telephone" class="telephone"><a href="tel:+41228200420">022 820 04 20</a></span>                 
                    </div>
                </div>
            </div>
            <div class="pure-u-1 pure-u-sm-1-3 address tessin">
                <hr>
                <div itemscope itemtype="http://schema.org/Corporation">
                    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                        <span itemprop="description" class="description">Tessin</span>
                        <span itemprop="alternateName">inSolus Sàrl</span>
                        <span itemprop="streetAddress">Via Selva 19</span>
                        <span itemprop="addressCountry" class="addressCountry">CH</span>-<span itemprop="postalCode" class="postalCode">6900</span>
                        <span itemprop="addressLocality" class="addressLocality">Massagno</span>                    
                    </div>
                </div>
            </div>
            <div class="pure-u-1">
                <!--<p>Pour toute question administrative et correspondance postale, prière d'utiliser l'adresse de Massagno.</p>-->
                <hr>
                <p>
                    <?php echo $page['description']; ?>
                </p>
                <p>
					En tant que société à responsabilité limitée (Sàrl) inSolus est inscrite au registre du commerce du canton de Genève depuis novembre 2000.
                </p>
                <p>
                    Numéro d'identification des entreprises (IDE/UID)&nbsp;: CH-660-2226000-4.
                    <br>Numéro TVA&nbsp;: CHE-101.278.969.
                </p>
				<p>
					&copy; 2000 - <?php echo date('Y'); ?> inSolus. Tous droits réservés. <a href="sitemap">Sitemap</a>.
				</p>
            </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js"></script>
        <script>
        document.addEventListener("DOMContentLoaded", function(){
            Typed.new(".typed-strings", {
                stringsElement: document.getElementById('typed-strings'),
                typeSpeed: 20,
                backDelay: 2000,
                loop: true
            });
        });
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-2003587-5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-2003587-5');
        </script>
    </body>
</html>