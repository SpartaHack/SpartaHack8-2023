f = [
    {"is_minor":"is_minor"},
    {"first_name":"first_name"},
    {"minorForm":"minorForm"},
    {"gender":"gender"},
    {"race":"race"},
    {"state_from":"state_from"},
    {"hackatons_attended":"hackatons_attended"},
    {"school":"school"},
    {"country_of_origin":"country_of_origin"},
    {"age":"age"},
    {"graduation_date":"graduation_date"},
    {"approved":"approved"},
    {"phone":"phone"},
    {"education_level":"education_level"},
    {"resume":"resume"},
    {"content_form":"content_form"},
    {"reason_attending":"reason_attending"},
    {"accepted_policy":"accepted_policy"},
    {"linkedin":"linkedin"},
    {"net_id":"net_id"},
    {"msu_student":"msu_student"},
    {"major":"major"},
    {"githubURL":"githubURL"},
    {"email":"email"},
    {"last_name":"last_name"}
  ]


for key in f:
    for k in key:
        print(f"{'{'}label: '{k}', key: '{k}'{'}'},")