 // Sample data
        const foodData = [
            {
                name: "Gudeg Yogyakarta",
                category: "Makanan Utama",
                region: "Yogyakarta",
                image: "https://cdn1-production-images-kly.akamaized.net/YYsIuet_Ygi-UJlZAHeQwnFO8DY=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2388182/original/087104900_1540012135-shutterstock_502495246.JPG",
                link: "detailgudeg.html"
            },
            {
                name: "Rendang",
                category: "Makanan Utama",
                region: "Sumatera Barat",
                image: "https://asset.kompas.com/crops/QsUYn6p5xK4DsivCrxa0_TXdjuk=/10x36:890x623/1200x800/data/photo/2023/03/25/641e5ef63dea4.jpg",
                link: "detailrendang.html"
            },
            {
                name: "Nasi Liwet",
                category: "Makanan Utama",
                region: "Jawa Tengah",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWCwqAFhNt1_tAj_JLp4liGm8BrhAcrOgyw&s",
                
            },
            {
                name: "Ayam Betutu",
                category: "Makanan Utama",
                region: "Bali",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
            },
             {
                name: "Ayam Betutu",
                category: "Makanan Utama",
                region: "Bali",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
            },
             {
                name: "Ayam Betutu",
                category: "Makanan Utama",
                region: "Bali",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
            },
             {
                name: "Ayam Betutu",
                category: "Makanan Utama",
                region: "Bali",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
            },
             {
                name: "Ayam Betutu",
                category: "Makanan Utama",
                region: "Bali",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400"
            }
        ];

        // Mobile menu toggle
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // Filter functionality
        let selectedCategory = "Makanan Utama";
        
        document.querySelectorAll('.jenis-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.jenis-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedCategory = this.dataset.value;
            });
        });

        function displayFoods(foods) {
            const foodList = document.getElementById('foodList');
            
            if (foods.length === 0) {
                foodList.innerHTML = `
                    <div class="empty-state" style="grid-column: 1/-1;">
                        <i class="fas fa-search"></i>
                        <h3>Tidak ada hasil</h3>
                        <p>Coba ubah filter untuk menemukan makanan lainnya</p>
                    </div>
                `;
                return;
            }

            foodList.innerHTML = foods.map(food => {
                // kalau tidak ada link, tetap aman
                const link = food.link ? food.link : "javascript:void(0)";

                return `
                    <div class="food-card cursor-pointer"
                        onclick="window.location.href='${link}'">
                        
                        <img src="${food.image}" alt="${food.name}">
                        <div class="food-info">
                            <div class="category">${food.category}</div>
                            <h3>${food.name}</h3>
                            <p class="region">${food.region}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }

        document.getElementById('filterBtn').addEventListener('click', function() {
            const selectedRegion = document.getElementById('daerahSelect').value;
            
            let filtered = foodData.filter(food => food.category === selectedCategory);
            
            if (selectedRegion !== "Semua") {
                filtered = filtered.filter(food => food.region === selectedRegion);
            }
            
            displayFoods(filtered);
        });

        // Display initial results
        displayFoods(foodData.filter(food => food.category === selectedCategory));