// Dữ liệu cây gia phả (dữ liệu mẫu)
const treeData = {
    "name": "Chồng Nguyễn Văn Hoành",
    "dob": "01-01-1945",
    "spouse": "Vợ Trần Thị Nhiệm",
    "image": "images/tranthinhiem.jpg",
    "phone": "0123456789",
    "address": "Thanh Hoá, Việt Nam",
    "description": "Ông và bà là người sáng lập gia đình. Ông Nguyễn Văn Hoành sinh năm 2019 mất ngày 05/06/1998 âm lịch. Bà Trần Thị Nhiệm sinh năm 1923, mất ngày 14/12/2014 âm lịch",
    "children": [
    {
        "name": "Con gái Nguyễn Thị Thiệm",
        "spouse": "Con rể Lê Cảnh Bin",
        "image": "images/50.png",
        "description": "Hiện đang sinh sống và làm việc tại Đồng Nai",
        "phone": "0966274586(con trai)",
        "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
        "children": [
          {
            "name": "Cháu trai Lê Cảnh Bản",
            "spouse": "Cháu dâu Lâm Thị Vinh 23/03/1982",
            "image": "images/nguyenthithiem/lecanhban.jpg",
            "phone": "0966274586",
            "address": "Thanh Hoá, Việt Nam",
            "description": "",
            "children": [
              {
                "name": "Cháu gái Lê Ngọc Anh",
                "spouse": "",
                "image": "images/nguyenthithiem/lengocanh.jpg",
                "description": "01/09/2003"
              },
              {
                "name": "Cháu gái Lê Tuấn Anh",
                "spouse": "",
                "image": "images/nguyenthithiem/lengocanh.jpg",
                "description": "27/11/2004"
              }
            ]
           
          },
          {
            "name": "Cháu gái Lê Thị Hội 05/10/1972",
            "spouse": "Cháu rể Võ Văn Lành 1973",
            "image": "images/50.png",
            "phone": "0989354675",
             "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
             "description": "",
            "children": [
              {
                "name": "Chắt Võ Văn Anh Phương",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
                "description": "2001"
              },
              {
                "name": "Chắt 2 Võ Văn Bình",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
                "description": "2022"
              }
            ]
           
          },
          {
            "name": "Cháu trai Lê Cảnh Trường",
            "spouse": "Cháu dâu Vũ Thị Ngọc Diễm",
            "image": "images/50.png",
            "phone": "",
            "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
            "description": "Lê Cảnh Trường 30/10/1974. Vũ Thị Ngọc Diễm 1/07/1977",
            "children": [
              {
                "name": "Chắ 1 Lê Cảnh Thọ",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
                "description": "Lê Cảnh Thọ 1993"
              },
              {
                "name": "Chắt Lê Ngọc Ánh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
                "description": "Lê Ngọc Ánh sinh năm 27/01/2004"
              },
              {
                "name": "Chắt Lê Cảnh Sơn",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Xuân Quế, Cẩm Mỹ, Đồng Nai, Việt Nam",
                "description": "Lê Cảnh Sơn sinh năm 27/04/2007 mất 23/05/2014"
              },
            ]
           
          }
        ]
      },
      {
        "name": "Con gái Nguyễn Thị Diện",
        "spouse": "Con rể Trần Đình Ngọc",
        "image": "images/nguyenthidien/nguyenthidien.jpg",
        "description": "Hiện đang sinh sống và làm việc tại quê nhà Triệu Sơn - Thanh Hoá",
        "children": [
        {
            "name": "Cháu gái Trần Thị Hồng",
            "spouse": "Cháu rể Bang",
            "image": "images/nguyenthidien/tranthịhong.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu trai Trần Đình Hiếu",
            "spouse": "Cháu dâu Huệ",
            "image": "images/nguyenthidien/trandinhhieu.jpg",
            "children": [
              {
                "name": "Chắt trai Trần Đình Hải Âu",
                "spouse": "",
                "image": "images/nguyenthidien/trandinhhieu/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt trai Trần Đình Huy",
                "spouse": "",
                "image": "images/nguyenthidien/trandinhhieu/2.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Trần Thị Hoa",
            "spouse": "Cháu rể Tấn",
            "image": "images/nguyenthidien/tranthịhoa.jpg",
            "children": [
              {
                "name": "Chắt 1 Đạt",
                "spouse": "",
                "image": "images/nguyenthidien/tranthịhoa/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1 Trân",
                "spouse": "",
                "image": "images/nguyenthidien/tranthịhoa/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu trai Trần Đình Hùng",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthidien/trandinhhung.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 2",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 3",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 4",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
            ]
          }
          
         
        ]
       
      },
      {
        "name": "Con gái Nguyễn Thị Khách",
        "spouse": "Con rể Thoa",
        "image": "https://via.placeholder.com/50",
        "description": "Hiện đang sinh sống và làm việc tại quê nhà Triệu Sơn - Thanh Hoá",
        "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
        "children": [
          {
            "name": "Cháu trai Thông",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthikhach/thong.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Thường",
            "spouse": "Cháu rể ...",
            "image": "images/nguyenthikhach/thuong.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu trai Xuyên",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthikhach/xuyen.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Dung",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthikhach/xuyen.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
        ]
      },
    {
        "name": "Con trai Nguyễn Ngọc Hân",
        "spouse": "Con dâu Vũ Thị Ân",
        "image": "images/nguyenngochan/nguyenngochan.jpg",
        "description": "Mất 02/05/2022 âm lich",
        "description": "Nguyễn Ngọc Hân sinh ngày 1952, mất ngày 02/05/2022 âm lich. Bà Vũ Thị Ân sinh ngày 08/10/1955",
        "children": [
          {
            "name": "Cháu gái Nguyễn Thị Oanh",
            "spouse": "Cháu rể Lê Trung",
            "image": "images/nguyenngochan/nguyenthioanh.jpg",
            "description": "Đang công tác tại bệnh viện nhi Thanh Hoá",
            "phone": "0123456789",
            "address": "Thanh Hoá, Việt Nam",
            "children": [
                {
                  "name": "Lê Trung Hiếu",
                  "spouse": "",
                  "image": "images/nguyenngochan/nguyenthioanh/1.jpg",
                  "description": "Sinh năm 2007",
                  "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
                },
                {
                  "name": "Chắt gái Lê Như Quỳnh Bông",
                  "spouse": "",
                  "image": "images/nguyenngochan/nguyenthioanh/2.jpg",
                  "description": "Sinh năm 2011",
                }
              ]
          },
         
          {
            "name": "Cháu gái Nguyễn Thị Yến",
            "spouse": "Cháu rể Đồng",
            "image": "images/nguyenngochan/nguyenthiyen.jpg",
            "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt 1 Bùi Văn Minh",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthiyen/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt Bùi Mai Trang",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthiyen/2.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
            
          },
          {
            "name": "Cháu gái Nguyễn Thị Ưng",
            "spouse": "Cháu rể Khánh",
            "image": "images/nguyenngochan/nguyenthiung.jpg",
            "description": "Bao nhieu tuổi 0859666683, đang học ở đâu.",
            "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt 1 Nguyễn Khánh Linh",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthiung/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2009, đang học ở đâu."
              },
              {
                "name": "Chắt 2 Nguyễn Quang Anh",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthiung/2.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2014, đang học ở đâu., 2014"
              }
            ]
            
          },
          {
            "name": "Cháu trai Nguyễn Văn Tuấn",
            "spouse": "Cháu dâu Tâm",
            "image": "images/nguyenngochan/nguyenvantuan.jpg",
            "description": "Đang công tác tại phó bí thư xã An Nông - Triệu Sơn, Thanh Hoá",
            "children": [
                {
                  "name": "Cháu trai Nguyễn Tuấn Hùng(Xu)",
                  "spouse": "",
                  "image": "images/nguyenngochan/nguyenvantuan/1.jpg",
                  "description": "sinh năm 2014",
                  "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
                },
                {
                  "name": "Nguyễn Ngọc Anh",
                  "spouse": "",
                  "image": "images/nguyenngochan/nguyenvantuan/2.jpg",
                  "description": "sinh năm 2021",
                  "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
                }
              ]
          },
          {
            "name": "Cháu gái Nguyễn Thị Ánh",
            "spouse": "Cháu rể ...",
            "image": "images/nguyenngochan/nguyenthianh.jpg",
            "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt 1 Nguyễn THảo My",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthianh/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổ 2011, đang học ở đâu."
              },
              {
                "name": "Chắt 1 Nguyễn Mai Lan",
                "spouse": "",
                "image": "images/nguyenngochan/nguyenthianh/2.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2016, đang học ở đâu."
              }
            ]
            
          },
          {
            "name": "Cháu trai Nguyễn Tiến Thành",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenngochan/nguyentienthanh.jpg",
            "description": "Bao nhieu tuổi, đang học ở đâu.",
            "phone": "0123456789",
                  "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt 1 Nguyễn Mai Hương",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2016, đang học ở đâu."
              },
              {
                "name": "Chắt 2 Nguyễn Trâm Anh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2019, đang học ở đâu."
              },
              {
                "name": "Chắt 3 Nguyễn Thành An",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2021, đang học ở đâu."
              },
            ]
            
          }
        ]
      },
      {
        "name": "Con gái Nguyễn Thị Hoan",
        "spouse": "Con rể Thắng",
        "image": "images/50.png",
        "description": "Hiện tại đang buôn bán ve chai",
        "children": [
        {
            "name": "Cháu gái Hoàng Thị Vân",
            "spouse": "Cháu rể ..",
            "image": "images/nguyenthihoan/hoangthivan.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Hoàng Thị Minh",
            "spouse": "Cháu rể ..",
            "image": "images/nguyenthihoan/hoangthiminh.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu trai Hoàng Văn Thai",
            "spouse": "Cháu dâu ..",
            "image": "images/nguyenthihoan/hoangvanthai.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu trai Hoàng Văn Thanh",
            "spouse": "Cháu dâu ..",
            "image": "images/nguyenthihoan/hoangvanthanh.jpg",
            "children": [
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt 1",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          }
          
        ]
      },
      {
        "name": "Con trai Nguyễn Thanh Hằng",
        "spouse": "Con dâu Thị Bình",
        "image": "images/nguyenthanhhang/nguyenthanhhang.jpg",
        "description": "Nguyễn Thanh Hằng sinh năm 03/10/1960 bà Nguyễn Thị Bình 05/12/1959",
        "phone": "0123456789",
        "address": "Suối mơ, Đồng Nai, Việt Nam",
        "children": [
          {
            "name": "Cháu trai Nguyễn Du",
            "spouse": "Cháu dâu Lê Thị Thắm",
            "images": ["images/nguyenthanhhang/nguyendu.jpg", "images/nguyenthanhhang/nguyendu/nguyenthitham.jpg"],
            "description": "Đang công tác tại phó phòng Phòng Cháy Chữa Cháy tỉnh Biên Hoà",
            "phone": "0123456789",
             "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt trai Nguyễn Minh Đức",
                "spouse": "",
                "image": "images/nguyenthanhhang/nguyenminhduc.jpg",
                "description": "Sinh 2014",
              },
              {
                "name": "Chắt trai Nguyễn Đức Anh",
                "spouse": "",
                "image": "images/nguyenthanhhang/nguyenminhduc.jpg",
              
              }
            ]
          },
          {
            "name": "Cháu trai Nguyễn Văn Dương",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthanhhang/nguyenvanduong.jpg",
            "phone": "0123456789",
             "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt trai Nguyễn Tiến Minh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt gái Nguyễn Trà My",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Nguyễn Văn Vương",
            "spouse": "Cháu dâu Nguyễn Thị Bích Trâm",
            "image": "images/nguyenthanhhang/nguyenvanvuong.jpg",
            "description": "SĐT cháu Vương: 00865396279",
            "phone": "0123456789",
            "address": "Thanh Hoá, Việt Nam",
            "description": "Nguyễn Văn Vương 1987. Nguyễn Thị Bích Trâm 1992",
            "children": [
              {
                "name": "Chắt gái Nguyễn Ngọc Thanh Trúc",
                "spouse": "",
                "image": "images/nguyenthanhhang/nguyenvanvuong/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi sinh năm 2013, đang học ở đâu."
              },
              {
                "name": "Chắt gái Nguyễn Ngọc Trúc My",
                "spouse": "",
                "image": "images/nguyenthanhhang/nguyenvanvuong/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi sinh 2019, đang học ở đâu."
              },
              {
                "name": "Chắt gái Nguyễn Ngọc Tường Vy",
                "spouse": "",
                "image": "images/nguyenthanhhang/nguyenvanvuong/1.jpg",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, sinh năm 2023, đang học ở đâu."
              }
            ]
          },
          {
            "name": "Cháu gái Nguyễn Thị Hương",
            "spouse": "Cháu dâu ...",
            "image": "images/nguyenthanhhang/nguyenthihuong.jpg",
            "phone": "0123456789",
            "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt trai Hoàng Thiên Khánh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi 2014, đang học ở đâu."
              }
            ]
          }
        ]
      },
      {
        "name": "Con trai Nguyễn Ngọc Cơ",
        "spouse": "Con dâu Trần Thị Nên",
        "image": "images/nguyenngocco/nguyenngocco.jpg",
        "description": "Hiện đang sinh sống và làm việc tại Hà Nội",
        "phone": "0979479479",
        "address": "Thanh Hoá, Việt Nam",
        "description": "Nguyễn Ngọc Cơ ngày sính 1962, Trần Thị Nên 1965",
        "children": [
          {
            "name": "Cháu gái Nguyễn Việt Hà",
            "spouse": "Cháu rể Thái",
            "image": "images/nguyenngocco/nguyenvietha.jpg",
            "description": "Nguyễn Việt Hà 10/04/1992",
            "children": [
              {
                "name": "Chắt gái Nguyễn Minh Châu",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Nguyễn Minh Châu 02/05/2019"
              },
              {
                "name": "Chắt trai Nguyễn Bá Minh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Nguyễn Bá Minh 11/08/2022"
              }
            ]
          },
          {
            "name": "Cháu trai Nguyễn Việt Anh",
            "spouse": "Cháu dâu Hà Thị Giang",
            "image": "images/nguyenngocco/nguyenvietanh.jpg",
            "description": "Nguyễn Việt Anh 17/10/1997",
            "children": [
              {
                "name": "Chắt 1 Nguyễn Anh Tú",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Nguyễn Anh Tú 20/02/2024"
              }
            ]
           
          }
        ]
      },
      {
        "name": "Con trai Nguyễn Văn Sở",
        "spouse": "Con dâu Nguyễn Thị Thạch",
        "image": "images/nguyenvanso/nguyenvanso.jpg",
        "description": "Nguyễn Văn Sở Sinh năm 1962, Bà Nguyễn Thị Thạch 1962",
        "phone": "0329245277",
         "address": "Thanh Hoá, Việt Nam",
        "children": [
          {
            "name": "Cháu trai Nguyễn Văn Sơn",
            "spouse": "Cháu dâu Hoàng Thị Huyền 20/04/2000",
            "image": "images/nguyenvanso/nguyenvanson.jpg",
            "description": "Nguyễn Văn Sơn 1993, Hoàng Thị Huyền 20/04/2000"
          },
          {
            "name": "Cháu gái Nguyễn Thị Ngân",
            "spouse": "Cháu rể Đỗ Đức Lâm",
            "image": "images/nguyenvanso/nguyenthingan.jpg",
            "children": [
              {
                "name": "Chắt Đỗ Minh Khôi",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "12/03/2024"
              }
            ]
          }
        ]
      },
      {
        "name": "Con trai Nguyễn Văn Mạnh",
        "spouse": "Con dâu Nguyễn Thị Ngoan",
        "image": "images/nguyenvanmanh/nguyenvanmanh.jpg",
        "description": "Sinh ngày 1966, Ngày mất 17/11/2017 âm lịch. Và Nguyễn Thị Ngoan sinh năm 1965",
        "phone": "0123456789",
        "address": "Thanh Hoá, Việt Nam",
        "children": [
          {
            "name": "Cháu trai Nguyễn Văn Dũng",
            "spouse": "Cháu dâu Ly",
            "image": "images/nguyenvanmanh/nguyenvandung.jpg",
              "children": [
                {
                  "name": "Chắt gái Nguyễn Trà My",
                  "spouse": "",
                  "image": "images/nguyenvanmanh/nguyenvandung.jpg",
                  "description": "Sinh năm 21/07/2012 dương lịch"
                },
                {
                  "name": "Chắt gái Nguyễn Hà Vy",
                  "spouse": "",
                  "image": "images/nguyenvanmanh/nguyenvandung.jpg",
                  "description": "Sinh năm 19/01/2018 dương lịch"
                },
                {
                  "name": "Chắt trai Nguyễn Trường An",
                  "spouse": "",
                  "image": "images/nguyenvanmanh/nguyenvandung.jpg",
                  "description": "Sinh năm 19/09/2019 dương lịch"
                }
              ]
          },
          {
            "name": "Cháu trai Nguyễn Ngọc Quý",
            "spouse": "Cháu dâu Hoàng Thị Tuyết",
            "image": "images/nguyenvanmanh/nguyenngocquy.jpg",
            "phone": "0123456789",
             "address": "Thanh Hoá, Việt Nam",
             "description": "Nguyễn Ngọc Quý 1/008/1990. Hoàng Thị Tuyết 1990",
            "children": [
              {
                "name": "Chắt trai Nguyễn Gia Bảo",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Sinh năm 2011"
              },
              {
                "name": "Chắt trai Nguyễn Bảo Khanh",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "2015"
              },
              {
                "name": "Chắt trai Chuối",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "2023"
              }
            ]
           
          },
          {
            "name": "Cháu gái Nguyễn Thị Lan",
            "spouse": "Cháu rể ...",
            "image": "images/nguyenvanmanh/nguyenthilan.jpg",
            "phone": "0123456789",
             "address": "Thanh Hoá, Việt Nam",
            "children": [
              {
                "name": "Chắt gái Hoàng Linh Nhi",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              },
              {
                "name": "Chắt trai Bon",
                "spouse": "",
                "image": "images/50.png",
                "phone": "",
                "address": "Thanh Hoá, Việt Nam",
                "description": "Bao nhieu tuổi, đang học ở đâu."
              }
            ]
           
          }
        ]
      },
      {
        "name": "Con gái Nguyễn Thị Toan",
        "spouse": "Con rể Phạm Đình Hiến",
        "images": [
            "images/nguyenthitoan/nguyenthitoan.jpg",
            "images/nguyenthitoan/nguyenthitoan/1.jpg",
            "images/nguyenthitoan/nguyenthitoan/2.jpg",
            "images/nguyenthitoan/nguyenthitoan/3.jpg",
            "images/nguyenthitoan/nguyenthitoan/4.jpg",
            "images/nguyenthitoan/nguyenthitoan/5.jpg",
            "images/nguyenthitoan/nguyenthitoan/6.jpg"
        ],
        "phone": "0987654321",
        "address": "Hồ Chí Minh, Việt Nam",
        "description": "Nguyễn Thị Toan 06/10/1972. Phạm Đình Hiến (đã mất)",
        "children": [
            {
                "name": "Cháu trai Phạm Đình Hoàng",
                "spouse": "Cháu dâu Nguyễn Thị Trang",
                "images": [
                    "images/nguyenthitoan/phamdinhhoang.jpg",
                    "images/nguyenthitoan/phamdinhhoang1.jpg",
                    "images/nguyenthitoan/phamdinhhoang2.jpg",
                    "images/nguyenthitoan/phamdinhhoang3.jpg"
                ],
                "phone": "0911119379",
                "address": "Hồ Chí Minh, Việt Nam",
                "description": "Phạm Đình Hoàng 21/08/1991. Nguyễn Thị Trang 05/05/1996",
                "children": [
                    {
                        "name": "Chắt gái Phạm An Hoài An",
                        "spouse": "",
                        "image": "images/nguyenthitoan/phamanhoaian.jpg",
                        "phone": "",
                        "address": "Hồ Chí Minh, Việt Nam",
                        "description": ""
                    }
                ]
            }
        ],
        "activities": [
            {
                "type": "image",
                "src": "images/nguyenthitoan/giadinh.jpg",
                "description": "Ảnh gia đình."
            },
            {
                "type": "video",
                "src": "https://www.facebook.com/reel/1172462167324318",
                "description": "Video giỗ ông ngoại"
            },
            {
                "type": "video",
                "src": "https://www.tiktok.com/@iamhoangpham/video/7356139709321579784",
                "description": "TikTok video về đám hỏi của Hoàng."
            },
            {
                "type": "video",
                "src": "https://www.facebook.com/reel/3212539605703579",
                "description": "Video về quê đám cưới anh Việt Anh"
            }
        ]
    }
      // Các thành viên khác...
    ]
  };


  const svg = d3.select("#tree-svg"),
  width = document.getElementById('svgContainer').clientWidth,
  height = document.getElementById('svgContainer').clientHeight;

// Thêm định nghĩa clipPath vào SVG
svg.append("defs")
  .append("clipPath")
      .attr("id", "circleClip")
  .append("circle")
      .attr("r", 25)
      .attr("cx", 0)
      .attr("cy", 0);

const g = svg.append("g").attr("transform", "translate(40,40)");

// Tạo đối tượng zoom
const zoom = d3.zoom()
  .scaleExtent([0.1, 5])
  .on('zoom', (event) => {
      g.attr('transform', event.transform);
  });

svg.call(zoom);

// Khởi tạo cây gia phả
let i = 0;
const root = d3.hierarchy(treeData, d => d.children);
root.x0 = height / 2;
root.y0 = 0;

// Thu gọn tất cả các node ban đầu
if (root.children) {
  root.children.forEach(collapse);
}

update(root);

function update(source) {
  const treeLayout = d3.tree().size([width, height]);
  const treeDataLayout = treeLayout(root);

  // Cập nhật các nút
  const nodes = treeDataLayout.descendants();
  const links = treeDataLayout.links();

  // Đặt vị trí cho các nút
  nodes.forEach(d => {
      d.y = d.depth * 180;
  });

  // ------------------- Nodes section -------------------

  // Cập nhật các nút
  const node = g.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++i));

  // Enter mới cho các nút
  const nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${source.x0},${source.y0})`)
      .on('click', (event, d) => {
          toggle(d);
          update(d);
      })
      .on('mouseover', function(event, d) { showInfo(d, this); })
      .on('mouseout', function(event, d) { hideInfo(d, this); });

  // Thêm hình ảnh cho nút
  nodeEnter.append('image')
      .attr('href', d => {
          if (d.data.images && d.data.images.length > 0) {
              return d.data.images[0];
          } else if (d.data.image) {
              return d.data.image;
          } else {
              return 'images/50.png'; // Đường dẫn đến ảnh mặc định
          }
      })
      .attr('x', -25)
      .attr('y', -25)
      .attr('width', 50)
      .attr('height', 50)
      .attr('clip-path', 'url(#circleClip)')
      .style('cursor', 'pointer')
      .on('click', function(event, d) {
          event.stopPropagation();
          showModal(d);
      });

  // Thêm văn bản cho nút
  nodeEnter.append('text')
      .attr('class', 'info-text')
      .attr('x', 0)
      .attr('y', 35)
      .style('text-anchor', 'middle')
      .text('')
      .style('display', 'none');

  // Thêm nút mở rộng/thu gọn nếu có con
  nodeEnter.filter(d => d.children || d._children).append('circle')
      .attr('class', 'node-button')
      .attr('r', 10)
      .attr('cx', 0)
      .attr('cy', -35)
      .style('fill', d => d._children ? '#555' : '#999')
      .on('click', function(event, d) {
          event.stopPropagation();
          toggle(d);
          update(d);
      });

  nodeEnter.filter(d => d.children || d._children).append('text')
      .attr('class', 'node-button-text')
      .attr('x', 0)
      .attr('y', -31)
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .style('fill', 'white')
      .text(d => d._children ? '+' : '-');

  // UPDATE
  const nodeUpdate = nodeEnter.merge(node);

  // Chuyển đến vị trí mới
  nodeUpdate.transition()
      .duration(200)
      .attr('transform', d => `translate(${d.x},${d.y})`);

  // Xóa các nút không còn tồn tại
  const nodeExit = node.exit().transition()
      .duration(200)
      .attr('transform', d => `translate(${source.x},${source.y})`)
      .remove();

  // ------------------- Links section -------------------

  // Cập nhật các liên kết
  const link = g.selectAll('path.link')
      .data(links, d => d.target.id);

  // Enter mới cho các liên kết
  const linkEnter = link.enter().insert('path', "g")
      .attr('class', 'link')
      .attr('d', d => {
          const o = {x: source.x0, y: source.y0};
          return diagonal(o, o);
      });

  // UPDATE
  const linkUpdate = linkEnter.merge(link);

  // Chuyển đến vị trí mới
  linkUpdate.transition()
      .duration(200)
      .attr('d', d => diagonal(d.source, d.target));

  // Xóa các liên kết không còn tồn tại
  const linkExit = link.exit().transition()
      .duration(200)
      .attr('d', d => {
          const o = {x: source.x, y: source.y};
          return diagonal(o, o);
      })
      .remove();

  // Lưu vị trí cũ cho chuyển đổi
  nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
  });
}

// Hàm tạo đường liên kết giữa các nút
function diagonal(s, d) {
  return `M ${s.x} ${s.y}
          C ${(s.x + d.x) / 2} ${s.y},
            ${(s.x + d.x) / 2} ${d.y},
            ${d.x} ${d.y}`;
}

// Hàm thu gọn các nút
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
  }
}

// Hàm chuyển đổi trạng thái mở rộng/thu gọn
function toggle(d) {
  if (d.children) {
      d._children = d.children;
      d.children = null;
  } else {
      d.children = d._children;
      d._children = null;
  }
}

// Hàm đặt lại cây về trạng thái ban đầu
function resetTree() {
  // Thu gọn tất cả các nút
  if (root.children) {
      root.children.forEach(collapse);
  }
  update(root);
}

// Utility functions to convert video URLs to embed formats
function convertYouTubeLinkToEmbed(url) {
  let videoId = '';
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
      videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
  }
  return null;
}

function extractTikTokVideoID(url) {
  const regex = /\/video\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function convertTikTokLinkToEmbed(url) {
  const videoId = extractTikTokVideoID(url);
  if (videoId) {
      return `https://www.tiktok.com/embed/${videoId}`;
  }
  return null;
}

// Flag to check if TikTok embed script has been loaded
let isTikTokScriptLoaded = false;

// Hàm thu thập tất cả các activities từ node và các node con
function collectAllActivities(node) {
  let activities = [];

  if (node.data.activities && node.data.activities.length > 0) {
      activities = activities.concat(node.data.activities);
  }

  if (node.children) {
      node.children.forEach(child => {
          activities = activities.concat(collectAllActivities(child));
      });
  }

  if (node._children) {
      node._children.forEach(child => {
          activities = activities.concat(collectAllActivities(child));
      });
  }

  return activities;
}

// Hàm hiển thị modal
function showModal(d) {
  // Hiển thị thông tin cơ bản
  d3.select('#modalName').text(d.data.name + (d.data.spouse ? ' & ' + d.data.spouse : ''));
  d3.select('#modalDescription').html(d.data.description || '');
  d3.select('#modalPhone').text(d.data.phone || 'Không có thông tin');
  d3.select('#modalAddress').text(d.data.address || 'Không có thông tin');

  // Clear previous slideshow content
  d3.select('#slideshowImages').html('');

  // Get list of images
  let images = [];
  if (d.data.images && d.data.images.length > 0) {
      images = d.data.images;
  } else if (d.data.image) {
      images = [d.data.image];
  } else {
      images = ['images/50.png']; // Default image
  }

  // Add images to slideshow
  images.forEach((imgSrc, index) => {
      d3.select('#slideshowImages')
          .append('div')
          .attr('class', 'mySlides')
          .append('img')
          .attr('src', imgSrc)
          .attr('style', 'width:100%');
  });

  // Show first slide
  slideIndex = 1;
  showSlides(slideIndex);

  // Clear previous children images
  d3.select('#childrenImages').html('');

  // Check if the person has children
  if (d.children || d._children) {
      const children = d.children || d._children;

      // Add each child's image to the modal
      children.forEach(child => {
          let childImage = 'images/50.png'; // Default image

          if (child.data.images && child.data.images.length > 0) {
              childImage = child.data.images[0];
          } else if (child.data.image) {
              childImage = child.data.image;
          }

          d3.select('#childrenImages')
              .append('img')
              .attr('src', childImage)
              .attr('alt', child.data.name)
              .attr('title', child.data.name)
              .attr('class', 'child-image')
              .on('click touchstart', function() { // Thêm touchstart
                  // Click on child image to show child info
                  showModal(child);
              });
      });
  } else {
      // If no children, show a message
      d3.select('#childrenImages')
          .append('p')
          .style('color', '#fff')
          .text('Không có thông tin về con cái.');
  }

  // Display family activities (videos, images)
  d3.select('#familyActivities').html(''); // Clear existing activities
  d3.select('#familyActivities').append('h3').text('Hoạt động gia đình:');

  // Thu thập tất cả các activities từ node cha và các node con
  const allActivities = collectAllActivities(d);

  // Loại bỏ activities trùng lặp
  const uniqueActivities = [];
  const activitySet = new Set();

  allActivities.forEach(activity => {
      const key = `${activity.type}-${activity.src}`;
      if (!activitySet.has(key)) {
          activitySet.add(key);
          uniqueActivities.push(activity);
      }
  });

  if (uniqueActivities.length > 0) {
      uniqueActivities.forEach(activity => {
          const activityDiv = d3.select('#familyActivities')
              .append('div')
              .attr('class', 'activity');

          if (activity.type === 'video') {
              let embedHTML = '';
              if (activity.src.includes('youtube.com') || activity.src.includes('youtu.be')) {
                  const youtubeEmbedLink = convertYouTubeLinkToEmbed(activity.src);
                  if (youtubeEmbedLink) {
                      embedHTML = `
                          <div class="responsive-video-container">
                              <iframe 
                                  src="${youtubeEmbedLink}" 
                                  title="YouTube video player" 
                                  frameborder="0" 
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                  allowfullscreen>
                              </iframe>
                          </div>
                      `;
                  }
              } else if (activity.src.includes('tiktok.com')) {
                const tiktokEmbedLink = convertTikTokLinkToEmbed(activity.src);
                const videoId = extractTikTokVideoID(activity.src);
                if (tiktokEmbedLink && videoId) {
                    embedHTML = `
                        <blockquote class="tiktok-embed" cite="${activity.src}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
                            <section></section>
                        </blockquote>
                    `;
                    // Load TikTok's embed.js script if not already loaded
                    if (!isTikTokScriptLoaded) {
                        const script = document.createElement('script');
                        script.async = true;
                        script.src = "https://www.tiktok.com/embed.js";
                        document.body.appendChild(script);
                        isTikTokScriptLoaded = true;
                    }
                }
              } else if (activity.src.includes('facebook.com')) {
                  const facebookEmbedLink = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(activity.src)}&show_text=false&width=500`;
                  embedHTML = `
                      <div class="responsive-video-container">
                          <iframe 
                              src="${facebookEmbedLink}" 
                              style="border:none;overflow:hidden" 
                              scrolling="no" 
                              frameborder="0" 
                              allowfullscreen="true" 
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                          </iframe>
                      </div>
                  `;
              } else {
                  // Handle local videos
                  embedHTML = `
                      <div class="responsive-video-container">
                          <video controls>
                              <source src="${activity.src}" type="video/mp4">
                              Your browser does not support the video tag.
                          </video>
                      </div>
                  `;
              }

              if (embedHTML) {
                  activityDiv.append('div').html(embedHTML);
              }

          } else if (activity.type === 'image') {
              activityDiv.append('img')
                  .attr('src', activity.src)
                  .style('width', '100%')
                  .style('object-fit', 'cover');
          }

          activityDiv.append('p').text(activity.description || '');
      });
  } else {
      d3.select('#familyActivities')
          .append('p')
          .style('color', '#fff')
          .text('Không có hoạt động gia đình.');
  }

  // Show modal
  d3.select('#imageModal').style('display', 'block');
}

// Biến toàn cục cho slideIndex
let slideIndex = 1;

// Hàm thay đổi slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hàm hiển thị slide
function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  if (slides.length === 0) return; // Nếu không có slide nào, thoát

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Ẩn tất cả các slide
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].style.display = 'block';

  // Cập nhật chỉ báo số trang
  document.getElementById('slideIndicator').innerText = `${slideIndex} / ${slides.length}`;
}

// Hiển thị thông tin khi hover
function showInfo(d, element) {
  const infoText = d3.select(element).select('.info-text');
  infoText.text(`${d.data.name}${d.data.spouse ? ' & ' + d.data.spouse : ''}`)
          .style('display', 'block');
}

// Ẩn thông tin khi rời chuột
function hideInfo(d, element) {
  const infoText = d3.select(element).select('.info-text');
  infoText.style('display', 'none');
}

// Sự kiện đóng modal
d3.select('#closeModal').on('click touchstart', function() { // Thêm touchstart
  d3.select('#imageModal').style('display', 'none');
});

d3.select('#imageModal').on('click touchstart', function(event) { // Thêm touchstart
  if (event.target.id === 'imageModal') {
      d3.select('#imageModal').style('display', 'none');
  }
});

// Sự kiện nút zoom
d3.select('#zoomIn').on('click touchstart', () => {
  svg.transition().call(zoom.scaleBy, 1.2);
});

d3.select('#zoomOut').on('click touchstart', () => {
  svg.transition().call(zoom.scaleBy, 0.8);
});

d3.select('#resetZoom').on('click touchstart', () => {
  svg.transition().call(zoom.scaleTo, 1);
  svg.transition().call(zoom.translateTo, width / 2, height / 2);
  resetTree(); // Gọi hàm resetTree để đặt lại trạng thái cây
});