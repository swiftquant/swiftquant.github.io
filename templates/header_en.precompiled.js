(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header_en'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"index_en.html\">Company</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"index_en.html\">Company</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">Structure</a>\n              <ul>\n                <li><a href=\"shareholders_en.html\">Shareholders</a></li>\n              </ul>\n            </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">Structure</a>\n              <ul>\n                <li><a href=\"shareholders_en.html\">Shareholders</a></li>\n              </ul>\n            </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"business_en.html\">Business</a>\n              <ul>\n                <li><a href=\"business_en.html#\">Bond Project</a></li>\n                <li><a href=\"business_en.html#\">Securities Brokerage Service</a></li>\n                <li><a href=\"business_en.html#\">Securities Research and Asset Management</a></li>\n                <li><a href=\"business_en.html#\">Development</a></li>\n                <li><a href=\"business_en.html#\">Customers and markets</a></li>\n              </ul>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"business_en.html\">Business</a>\n              <ul>\n                <li><a href=\"business_en.html#\">Bond Project</a></li>\n                <li><a href=\"business_en.html#\">Securities Brokerage Service</a></li>\n                <li><a href=\"business_en.html#\">Securities Research and Asset Management</a></li>\n                <li><a href=\"business_en.html#\">Development</a></li>\n                <li><a href=\"business_en.html#\">Customers and markets</a></li>\n              </ul>\n            </li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active drop-down\"><a href=\"#\">Operation</a>\n              <ul>\n                <li><a href=\"operation_en.html\">Securities Brokerage and Trading</a></li>\n                <li><a href=\"risk_en.html\">Risk and internal control</a></li>\n                 <li><a href=\"license_en.html\">License</a></li>\n              </ul>\n            </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"drop-down\"><a href=\"#\">Operation</a>\n              <ul>\n                <li><a href=\"operation_en.html\">Securities Brokerage and Trading</a></li>\n                <li><a href=\"risk_en.html\">Risk and internal control</a></li>\n                <li><a href=\"license_en.html\">License</a></li>\n              </ul>\n            </li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"active\"><a href=\"tradingview_en.html\">Chart</a></li>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "            <li><a href=\"tradingview_en.html\">Chart</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container d-flex align-items-center\">\n\n      <!-- <h1 class=\"logo mr-auto\"><a href=\"index_en.html\">Multi</a></h1> -->\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <a href=\"index_en.html\" class=\"logo mr-auto\">\n        <img src=\"assets/img/logo_1.jpg\" alt=\"\" style=\"max-height:50px\" class=\"img-fluid\"></a>\n\n      <nav id=\"nav-menu\" class=\"nav-menu d-none d-lg-block\">\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"organization") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"business") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":50,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"operation") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":52,"column":10},"end":{"line":68,"column":17}}})) != null ? stack1 : "")
    + "          \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"chart") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":70,"column":10},"end":{"line":74,"column":17}}})) != null ? stack1 : "")
    + "\n      </ul>\n      </nav><!-- .nav-menu -->\n\n      <!-- <a href=\"#about\" class=\"get-started-btn\">Get Started</a> -->\n\n    </div>";
},"useData":true});
})();