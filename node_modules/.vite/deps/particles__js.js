// node_modules/particles.js/particles.js
var pJS = function(tag_id, params) {
  var canvas_el = document.querySelector("#" + tag_id + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var pJS2 = this.pJS;
  if (params) {
    Object.deepExtend(pJS2, params);
  }
  pJS2.tmp.obj = {
    size_value: pJS2.particles.size.value,
    size_anim_speed: pJS2.particles.size.anim.speed,
    move_speed: pJS2.particles.move.speed,
    line_linked_distance: pJS2.particles.line_linked.distance,
    line_linked_width: pJS2.particles.line_linked.width,
    mode_grab_distance: pJS2.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS2.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS2.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS2.interactivity.modes.repulse.distance
  };
  pJS2.fn.retinaInit = function() {
    if (pJS2.retina_detect && window.devicePixelRatio > 1) {
      pJS2.canvas.pxratio = window.devicePixelRatio;
      pJS2.tmp.retina = true;
    } else {
      pJS2.canvas.pxratio = 1;
      pJS2.tmp.retina = false;
    }
    pJS2.canvas.w = pJS2.canvas.el.offsetWidth * pJS2.canvas.pxratio;
    pJS2.canvas.h = pJS2.canvas.el.offsetHeight * pJS2.canvas.pxratio;
    pJS2.particles.size.value = pJS2.tmp.obj.size_value * pJS2.canvas.pxratio;
    pJS2.particles.size.anim.speed = pJS2.tmp.obj.size_anim_speed * pJS2.canvas.pxratio;
    pJS2.particles.move.speed = pJS2.tmp.obj.move_speed * pJS2.canvas.pxratio;
    pJS2.particles.line_linked.distance = pJS2.tmp.obj.line_linked_distance * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.grab.distance = pJS2.tmp.obj.mode_grab_distance * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.bubble.distance = pJS2.tmp.obj.mode_bubble_distance * pJS2.canvas.pxratio;
    pJS2.particles.line_linked.width = pJS2.tmp.obj.line_linked_width * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.bubble.size = pJS2.tmp.obj.mode_bubble_size * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.repulse.distance = pJS2.tmp.obj.mode_repulse_distance * pJS2.canvas.pxratio;
  };
  pJS2.fn.canvasInit = function() {
    pJS2.canvas.ctx = pJS2.canvas.el.getContext("2d");
  };
  pJS2.fn.canvasSize = function() {
    pJS2.canvas.el.width = pJS2.canvas.w;
    pJS2.canvas.el.height = pJS2.canvas.h;
    if (pJS2 && pJS2.interactivity.events.resize) {
      window.addEventListener("resize", function() {
        pJS2.canvas.w = pJS2.canvas.el.offsetWidth;
        pJS2.canvas.h = pJS2.canvas.el.offsetHeight;
        if (pJS2.tmp.retina) {
          pJS2.canvas.w *= pJS2.canvas.pxratio;
          pJS2.canvas.h *= pJS2.canvas.pxratio;
        }
        pJS2.canvas.el.width = pJS2.canvas.w;
        pJS2.canvas.el.height = pJS2.canvas.h;
        if (!pJS2.particles.move.enable) {
          pJS2.fn.particlesEmpty();
          pJS2.fn.particlesCreate();
          pJS2.fn.particlesDraw();
          pJS2.fn.vendors.densityAutoParticles();
        }
        pJS2.fn.vendors.densityAutoParticles();
      });
    }
  };
  pJS2.fn.canvasPaint = function() {
    pJS2.canvas.ctx.fillRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
  };
  pJS2.fn.canvasClear = function() {
    pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
  };
  pJS2.fn.particle = function(color, opacity, position) {
    this.radius = (pJS2.particles.size.random ? Math.random() : 1) * pJS2.particles.size.value;
    if (pJS2.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS2.particles.size.anim.speed / 100;
      if (!pJS2.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }
    this.x = position ? position.x : Math.random() * pJS2.canvas.w;
    this.y = position ? position.y : Math.random() * pJS2.canvas.h;
    if (this.x > pJS2.canvas.w - this.radius * 2) this.x = this.x - this.radius;
    else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS2.canvas.h - this.radius * 2) this.y = this.y - this.radius;
    else if (this.y < this.radius * 2) this.y = this.y + this.radius;
    if (pJS2.particles.move.bounce) {
      pJS2.fn.vendors.checkOverlap(this, position);
    }
    this.color = {};
    if (typeof color.value == "object") {
      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS2.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != void 0 && color.value.g != void 0 && color.value.b != void 0) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != void 0 && color.value.s != void 0 && color.value.l != void 0) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == "random") {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == "string") {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }
    this.opacity = (pJS2.particles.opacity.random ? Math.random() : 1) * pJS2.particles.opacity.value;
    if (pJS2.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS2.particles.opacity.anim.speed / 100;
      if (!pJS2.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }
    var velbase = {};
    switch (pJS2.particles.move.direction) {
      case "top":
        velbase = { x: 0, y: -1 };
        break;
      case "top-right":
        velbase = { x: 0.5, y: -0.5 };
        break;
      case "right":
        velbase = { x: 1, y: -0 };
        break;
      case "bottom-right":
        velbase = { x: 0.5, y: 0.5 };
        break;
      case "bottom":
        velbase = { x: 0, y: 1 };
        break;
      case "bottom-left":
        velbase = { x: -0.5, y: 1 };
        break;
      case "left":
        velbase = { x: -1, y: 0 };
        break;
      case "top-left":
        velbase = { x: -0.5, y: -0.5 };
        break;
      default:
        velbase = { x: 0, y: 0 };
        break;
    }
    if (pJS2.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS2.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }
    this.vx_i = this.vx;
    this.vy_i = this.vy;
    var shape_type = pJS2.particles.shape.type;
    if (typeof shape_type == "object") {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }
    if (this.shape == "image") {
      var sh = pJS2.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg != void 0) {
        pJS2.fn.vendors.createSvgImg(this);
        if (pJS2.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };
  pJS2.fn.particle.prototype.draw = function() {
    var p = this;
    if (p.radius_bubble != void 0) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }
    if (p.opacity_bubble != void 0) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }
    if (p.color.rgb) {
      var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + opacity + ")";
    } else {
      var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + opacity + ")";
    }
    pJS2.canvas.ctx.fillStyle = color_value;
    pJS2.canvas.ctx.beginPath();
    switch (p.shape) {
      case "circle":
        pJS2.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;
      case "edge":
        pJS2.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;
      case "triangle":
        pJS2.fn.vendors.drawShape(pJS2.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;
      case "polygon":
        pJS2.fn.vendors.drawShape(
          pJS2.canvas.ctx,
          p.x - radius / (pJS2.particles.shape.polygon.nb_sides / 3.5),
          // startX
          p.y - radius / (2.66 / 3.5),
          // startY
          radius * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
          // sideLength
          pJS2.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          1
          // sideCountDenominator
        );
        break;
      case "star":
        pJS2.fn.vendors.drawShape(
          pJS2.canvas.ctx,
          p.x - radius * 2 / (pJS2.particles.shape.polygon.nb_sides / 4),
          // startX
          p.y - radius / (2 * 2.66 / 3.5),
          // startY
          radius * 2 * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
          // sideLength
          pJS2.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          2
          // sideCountDenominator
        );
        break;
      case "image":
        let draw2 = function() {
          pJS2.canvas.ctx.drawImage(
            img_obj,
            p.x - radius,
            p.y - radius,
            radius * 2,
            radius * 2 / p.img.ratio
          );
        };
        var draw = draw2;
        if (pJS2.tmp.img_type == "svg") {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS2.tmp.img_obj;
        }
        if (img_obj) {
          draw2();
        }
        break;
    }
    pJS2.canvas.ctx.closePath();
    if (pJS2.particles.shape.stroke.width > 0) {
      pJS2.canvas.ctx.strokeStyle = pJS2.particles.shape.stroke.color;
      pJS2.canvas.ctx.lineWidth = pJS2.particles.shape.stroke.width;
      pJS2.canvas.ctx.stroke();
    }
    pJS2.canvas.ctx.fill();
  };
  pJS2.fn.particlesCreate = function() {
    for (var i = 0; i < pJS2.particles.number.value; i++) {
      pJS2.particles.array.push(new pJS2.fn.particle(pJS2.particles.color, pJS2.particles.opacity.value));
    }
  };
  pJS2.fn.particlesUpdate = function() {
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p = pJS2.particles.array[i];
      if (pJS2.particles.move.enable) {
        var ms = pJS2.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }
      if (pJS2.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS2.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS2.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }
      if (pJS2.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS2.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS2.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }
      if (pJS2.particles.move.out_mode == "bounce") {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS2.canvas.w,
          y_top: p.radius,
          y_bottom: pJS2.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS2.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS2.canvas.h + p.radius
        };
      }
      if (p.x - p.radius > pJS2.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS2.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS2.canvas.h;
      }
      if (p.y - p.radius > pJS2.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS2.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS2.canvas.w;
      }
      switch (pJS2.particles.move.out_mode) {
        case "bounce":
          if (p.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }
      if (isInArray("grab", pJS2.interactivity.events.onhover.mode)) {
        pJS2.fn.modes.grabParticle(p);
      }
      if (isInArray("bubble", pJS2.interactivity.events.onhover.mode) || isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
        pJS2.fn.modes.bubbleParticle(p);
      }
      if (isInArray("repulse", pJS2.interactivity.events.onhover.mode) || isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
        pJS2.fn.modes.repulseParticle(p);
      }
      if (pJS2.particles.line_linked.enable || pJS2.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS2.particles.array.length; j++) {
          var p2 = pJS2.particles.array[j];
          if (pJS2.particles.line_linked.enable) {
            pJS2.fn.interact.linkParticles(p, p2);
          }
          if (pJS2.particles.move.attract.enable) {
            pJS2.fn.interact.attractParticles(p, p2);
          }
          if (pJS2.particles.move.bounce) {
            pJS2.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };
  pJS2.fn.particlesDraw = function() {
    pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
    pJS2.fn.particlesUpdate();
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p = pJS2.particles.array[i];
      p.draw();
    }
  };
  pJS2.fn.particlesEmpty = function() {
    pJS2.particles.array = [];
  };
  pJS2.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(pJS2.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
    pJS2.tmp.source_svg = void 0;
    pJS2.tmp.img_obj = void 0;
    pJS2.tmp.count_svg = 0;
    pJS2.fn.particlesEmpty();
    pJS2.fn.canvasClear();
    pJS2.fn.vendors.start();
  };
  pJS2.fn.interact.linkParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= pJS2.particles.line_linked.distance) {
      var opacity_line = pJS2.particles.line_linked.opacity - dist / (1 / pJS2.particles.line_linked.opacity) / pJS2.particles.line_linked.distance;
      if (opacity_line > 0) {
        var color_line = pJS2.particles.line_linked.color_rgb_line;
        pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
        pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
        pJS2.canvas.ctx.beginPath();
        pJS2.canvas.ctx.moveTo(p1.x, p1.y);
        pJS2.canvas.ctx.lineTo(p2.x, p2.y);
        pJS2.canvas.ctx.stroke();
        pJS2.canvas.ctx.closePath();
      }
    }
  };
  pJS2.fn.interact.attractParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= pJS2.particles.line_linked.distance) {
      var ax = dx / (pJS2.particles.move.attract.rotateX * 1e3), ay = dy / (pJS2.particles.move.attract.rotateY * 1e3);
      p1.vx -= ax;
      p1.vy -= ay;
      p2.vx += ax;
      p2.vy += ay;
    }
  };
  pJS2.fn.interact.bounceParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy), dist_p = p1.radius + p2.radius;
    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;
      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };
  pJS2.fn.modes.pushParticles = function(nb, pos) {
    pJS2.tmp.pushing = true;
    for (var i = 0; i < nb; i++) {
      pJS2.particles.array.push(
        new pJS2.fn.particle(
          pJS2.particles.color,
          pJS2.particles.opacity.value,
          {
            "x": pos ? pos.pos_x : Math.random() * pJS2.canvas.w,
            "y": pos ? pos.pos_y : Math.random() * pJS2.canvas.h
          }
        )
      );
      if (i == nb - 1) {
        if (!pJS2.particles.move.enable) {
          pJS2.fn.particlesDraw();
        }
        pJS2.tmp.pushing = false;
      }
    }
  };
  pJS2.fn.modes.removeParticles = function(nb) {
    pJS2.particles.array.splice(0, nb);
    if (!pJS2.particles.move.enable) {
      pJS2.fn.particlesDraw();
    }
  };
  pJS2.fn.modes.bubbleParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && isInArray("bubble", pJS2.interactivity.events.onhover.mode)) {
      let init2 = function() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };
      var init = init2;
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), ratio = 1 - dist_mouse / pJS2.interactivity.modes.bubble.distance;
      if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
        if (ratio >= 0 && pJS2.interactivity.status == "mousemove") {
          if (pJS2.interactivity.modes.bubble.size != pJS2.particles.size.value) {
            if (pJS2.interactivity.modes.bubble.size > pJS2.particles.size.value) {
              var size = p.radius + pJS2.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS2.interactivity.modes.bubble.size, size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }
          if (pJS2.interactivity.modes.bubble.opacity != pJS2.particles.opacity.value) {
            if (pJS2.interactivity.modes.bubble.opacity > pJS2.particles.opacity.value) {
              var opacity = pJS2.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS2.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS2.particles.opacity.value - pJS2.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS2.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init2();
      }
      if (pJS2.interactivity.status == "mouseleave") {
        init2();
      }
    } else if (pJS2.interactivity.events.onclick.enable && isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
      let process2 = function(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
        if (bubble_param != particles_param) {
          if (!pJS2.tmp.bubble_duration_end) {
            if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
              if (p_obj_bubble != void 0) var obj = p_obj_bubble;
              else var obj = p_obj;
              if (obj != bubble_param) {
                var value = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration;
                if (id == "size") p.radius_bubble = value;
                if (id == "opacity") p.opacity_bubble = value;
              }
            } else {
              if (id == "size") p.radius_bubble = void 0;
              if (id == "opacity") p.opacity_bubble = void 0;
            }
          } else {
            if (p_obj_bubble != void 0) {
              var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration, dif2 = bubble_param - value_tmp;
              value = bubble_param + dif2;
              if (id == "size") p.radius_bubble = value;
              if (id == "opacity") p.opacity_bubble = value;
            }
          }
        }
      };
      var process = process2;
      if (pJS2.tmp.bubble_clicking) {
        var dx_mouse = p.x - pJS2.interactivity.mouse.click_pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.click_pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), time_spent = ((/* @__PURE__ */ new Date()).getTime() - pJS2.interactivity.mouse.click_time) / 1e3;
        if (time_spent > pJS2.interactivity.modes.bubble.duration) {
          pJS2.tmp.bubble_duration_end = true;
        }
        if (time_spent > pJS2.interactivity.modes.bubble.duration * 2) {
          pJS2.tmp.bubble_clicking = false;
          pJS2.tmp.bubble_duration_end = false;
        }
      }
      if (pJS2.tmp.bubble_clicking) {
        process2(pJS2.interactivity.modes.bubble.size, pJS2.particles.size.value, p.radius_bubble, p.radius, "size");
        process2(pJS2.interactivity.modes.bubble.opacity, pJS2.particles.opacity.value, p.opacity_bubble, p.opacity, "opacity");
      }
    }
  };
  pJS2.fn.modes.repulseParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && isInArray("repulse", pJS2.interactivity.events.onhover.mode) && pJS2.interactivity.status == "mousemove") {
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse }, repulseRadius = pJS2.interactivity.modes.repulse.distance, velocity = 100, repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };
      if (pJS2.particles.move.out_mode == "bounce") {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS2.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS2.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS2.interactivity.events.onclick.enable && isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
      if (!pJS2.tmp.repulse_finish) {
        pJS2.tmp.repulse_count++;
        if (pJS2.tmp.repulse_count == pJS2.particles.array.length) {
          pJS2.tmp.repulse_finish = true;
        }
      }
      if (pJS2.tmp.repulse_clicking) {
        let process2 = function() {
          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);
          if (pJS2.particles.move.out_mode == "bounce") {
            var pos2 = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos2.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;
            else if (pos2.x - p.radius < 0) p.vx = -p.vx;
            if (pos2.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;
            else if (pos2.y - p.radius < 0) p.vy = -p.vy;
          }
        };
        var process = process2;
        var repulseRadius = Math.pow(pJS2.interactivity.modes.repulse.distance / 6, 3);
        var dx = pJS2.interactivity.mouse.click_pos_x - p.x, dy = pJS2.interactivity.mouse.click_pos_y - p.y, d = dx * dx + dy * dy;
        var force = -repulseRadius / d * 1;
        if (d <= repulseRadius) {
          process2();
        }
      } else {
        if (pJS2.tmp.repulse_clicking == false) {
          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };
  pJS2.fn.modes.grabParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && pJS2.interactivity.status == "mousemove") {
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      if (dist_mouse <= pJS2.interactivity.modes.grab.distance) {
        var opacity_line = pJS2.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS2.interactivity.modes.grab.line_linked.opacity) / pJS2.interactivity.modes.grab.distance;
        if (opacity_line > 0) {
          var color_line = pJS2.particles.line_linked.color_rgb_line;
          pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
          pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
          pJS2.canvas.ctx.beginPath();
          pJS2.canvas.ctx.moveTo(p.x, p.y);
          pJS2.canvas.ctx.lineTo(pJS2.interactivity.mouse.pos_x, pJS2.interactivity.mouse.pos_y);
          pJS2.canvas.ctx.stroke();
          pJS2.canvas.ctx.closePath();
        }
      }
    }
  };
  pJS2.fn.vendors.eventsListeners = function() {
    if (pJS2.interactivity.detect_on == "window") {
      pJS2.interactivity.el = window;
    } else {
      pJS2.interactivity.el = pJS2.canvas.el;
    }
    if (pJS2.interactivity.events.onhover.enable || pJS2.interactivity.events.onclick.enable) {
      pJS2.interactivity.el.addEventListener("mousemove", function(e) {
        if (pJS2.interactivity.el == window) {
          var pos_x = e.clientX, pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX, pos_y = e.offsetY || e.clientY;
        }
        pJS2.interactivity.mouse.pos_x = pos_x;
        pJS2.interactivity.mouse.pos_y = pos_y;
        if (pJS2.tmp.retina) {
          pJS2.interactivity.mouse.pos_x *= pJS2.canvas.pxratio;
          pJS2.interactivity.mouse.pos_y *= pJS2.canvas.pxratio;
        }
        pJS2.interactivity.status = "mousemove";
      });
      pJS2.interactivity.el.addEventListener("mouseleave", function(e) {
        pJS2.interactivity.mouse.pos_x = null;
        pJS2.interactivity.mouse.pos_y = null;
        pJS2.interactivity.status = "mouseleave";
      });
    }
    if (pJS2.interactivity.events.onclick.enable) {
      pJS2.interactivity.el.addEventListener("click", function() {
        pJS2.interactivity.mouse.click_pos_x = pJS2.interactivity.mouse.pos_x;
        pJS2.interactivity.mouse.click_pos_y = pJS2.interactivity.mouse.pos_y;
        pJS2.interactivity.mouse.click_time = (/* @__PURE__ */ new Date()).getTime();
        if (pJS2.interactivity.events.onclick.enable) {
          switch (pJS2.interactivity.events.onclick.mode) {
            case "push":
              if (pJS2.particles.move.enable) {
                pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
              } else {
                if (pJS2.interactivity.modes.push.particles_nb == 1) {
                  pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
                } else if (pJS2.interactivity.modes.push.particles_nb > 1) {
                  pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb);
                }
              }
              break;
            case "remove":
              pJS2.fn.modes.removeParticles(pJS2.interactivity.modes.remove.particles_nb);
              break;
            case "bubble":
              pJS2.tmp.bubble_clicking = true;
              break;
            case "repulse":
              pJS2.tmp.repulse_clicking = true;
              pJS2.tmp.repulse_count = 0;
              pJS2.tmp.repulse_finish = false;
              setTimeout(function() {
                pJS2.tmp.repulse_clicking = false;
              }, pJS2.interactivity.modes.repulse.duration * 1e3);
              break;
          }
        }
      });
    }
  };
  pJS2.fn.vendors.densityAutoParticles = function() {
    if (pJS2.particles.number.density.enable) {
      var area = pJS2.canvas.el.width * pJS2.canvas.el.height / 1e3;
      if (pJS2.tmp.retina) {
        area = area / (pJS2.canvas.pxratio * 2);
      }
      var nb_particles = area * pJS2.particles.number.value / pJS2.particles.number.density.value_area;
      var missing_particles = pJS2.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS2.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS2.fn.modes.removeParticles(missing_particles);
    }
  };
  pJS2.fn.vendors.checkOverlap = function(p1, position) {
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p2 = pJS2.particles.array[i];
      var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS2.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS2.canvas.h;
        pJS2.fn.vendors.checkOverlap(p1);
      }
    }
  };
  pJS2.fn.vendors.createSvgImg = function(p) {
    var svgXml = pJS2.tmp.source_svg, rgbHex = /#([0-9A-F]{3,6})/gi, coloredSvgXml = svgXml.replace(rgbHex, function(m, r, g, b) {
      if (p.color.rgb) {
        var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + p.opacity + ")";
      } else {
        var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + p.opacity + ")";
      }
      return color_value;
    });
    var svg = new Blob([coloredSvgXml], { type: "image/svg+xml;charset=utf-8" }), DOMURL = window.URL || window.webkitURL || window, url = DOMURL.createObjectURL(svg);
    var img = new Image();
    img.addEventListener("load", function() {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS2.tmp.count_svg++;
    });
    img.src = url;
  };
  pJS2.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(pJS2.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };
  pJS2.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    c.fill();
    c.restore();
  };
  pJS2.fn.vendors.exportImg = function() {
    window.open(pJS2.canvas.el.toDataURL("image/png"), "_blank");
  };
  pJS2.fn.vendors.loadImg = function(type) {
    pJS2.tmp.img_error = void 0;
    if (pJS2.particles.shape.image.src != "") {
      if (type == "svg") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", pJS2.particles.shape.image.src);
        xhr.onreadystatechange = function(data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS2.tmp.source_svg = data.currentTarget.response;
              pJS2.fn.vendors.checkBeforeDraw();
            } else {
              console.log("Error pJS - Image not found");
              pJS2.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {
        var img = new Image();
        img.addEventListener("load", function() {
          pJS2.tmp.img_obj = img;
          pJS2.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS2.particles.shape.image.src;
      }
    } else {
      console.log("Error pJS - No image.src");
      pJS2.tmp.img_error = true;
    }
  };
  pJS2.fn.vendors.draw = function() {
    if (pJS2.particles.shape.type == "image") {
      if (pJS2.tmp.img_type == "svg") {
        if (pJS2.tmp.count_svg >= pJS2.particles.number.value) {
          pJS2.fn.particlesDraw();
          if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
          else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        } else {
          if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        }
      } else {
        if (pJS2.tmp.img_obj != void 0) {
          pJS2.fn.particlesDraw();
          if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
          else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        } else {
          if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        }
      }
    } else {
      pJS2.fn.particlesDraw();
      if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
      else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
    }
  };
  pJS2.fn.vendors.checkBeforeDraw = function() {
    if (pJS2.particles.shape.type == "image") {
      if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg == void 0) {
        pJS2.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        cancelRequestAnimFrame(pJS2.tmp.checkAnimFrame);
        if (!pJS2.tmp.img_error) {
          pJS2.fn.vendors.init();
          pJS2.fn.vendors.draw();
        }
      }
    } else {
      pJS2.fn.vendors.init();
      pJS2.fn.vendors.draw();
    }
  };
  pJS2.fn.vendors.init = function() {
    pJS2.fn.retinaInit();
    pJS2.fn.canvasInit();
    pJS2.fn.canvasSize();
    pJS2.fn.canvasPaint();
    pJS2.fn.particlesCreate();
    pJS2.fn.vendors.densityAutoParticles();
    pJS2.particles.line_linked.color_rgb_line = hexToRgb(pJS2.particles.line_linked.color);
  };
  pJS2.fn.vendors.start = function() {
    if (isInArray("image", pJS2.particles.shape.type)) {
      pJS2.tmp.img_type = pJS2.particles.shape.image.src.substr(pJS2.particles.shape.image.src.length - 3);
      pJS2.fn.vendors.loadImg(pJS2.tmp.img_type);
    } else {
      pJS2.fn.vendors.checkBeforeDraw();
    }
  };
  pJS2.fn.vendors.eventsListeners();
  pJS2.fn.vendors.start();
};
Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1e3 / 60);
  };
}();
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
window.pJSDom = [];
window.particlesJS = function(tag_id, params) {
  if (typeof tag_id != "string") {
    params = tag_id;
    tag_id = "particles-js";
  }
  if (!tag_id) {
    tag_id = "particles-js";
  }
  var pJS_tag = document.getElementById(tag_id), pJS_canvas_class = "particles-js-canvas-el", exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }
  var canvas_el = document.createElement("canvas");
  canvas_el.className = pJS_canvas_class;
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};
window.particlesJS.load = function(tag_id, path_config_json, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", path_config_json);
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log("Error pJS - XMLHttpRequest status: " + xhr.status);
        console.log("Error pJS - File config not found");
      }
    }
  };
  xhr.send();
};
//# sourceMappingURL=particles__js.js.map
